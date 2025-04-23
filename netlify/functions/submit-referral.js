const postmark = require('postmark')
const axios = require('axios')

const createEmail = body => {
  return `<p>Dear ${body.emp_name},</p>
  <p>This email is to thank you for referring ${body.ref_name}.</p>
  <p>As you know, referrals are one of our best sources of new hires, and your effort is extremely valuable to us. We will let you know about the status of your referred candidate(s).</p>
  <p>Thanks once again!</p>`
}

exports.handler = (event, context, callback) => {
  let postmarkClient
  let body

  try {
    body = JSON.parse(event.body)

    // Create reusable transporter object using the default SMTP transport
    postmarkClient = new postmark.ServerClient(process.env.POSTMARK_KEY)
  } catch (err) {
    return callback(null, {
      statusCode: 500,
      body: err.message
    })
  }

  try {
    // send mail with defined transport object
    Promise.all([
      axios.post(process.env.TEAMS_REFERRAL_WEBHOOK, {
        '@type': 'MessageCard',
        '@context': 'http://schema.org/extensions',
        themeColor: 'E30613',
        summary: 'Referral Form Submission',
        sections: [
          {
            activityTitle: 'Referral Form Submission',
            activitySubtitle: `${body.emp_name} referred ${body.ref_name}`,
            facts: [
              {
                name: 'Employee Name',
                value: body.emp_name
              },
              {
                name: 'Employee Email',
                value: body.emp_email
              },
              {
                name: 'Applicant Name',
                value: body.ref_name
              },
              {
                name: 'Applicant Email',
                value: body.ref_email || 'None provided'
              }
            ]
          },
        ]
      }),
      postmarkClient.sendEmail({
        from: 'notifications@lifeplusworldwide.com',
        to: 'brittany.west@lifeplusworldwide.com',
        cc: 'jennifer.bowden@lifeplusworldwide.com',
        subject: `[Employee Referral] Referral Form Submission`,
        htmlBody: `<p><strong>Employee Name:</strong><br>${body.emp_name}</p>
        <p><strong>Employee Email:</strong><br>${body.emp_email}</p>
        <p><strong>Applicant Name:</strong><br>${body.ref_name}</p>
        <p><strong>Applicant Email:</strong><br>${body.ref_email || 'None provided'}</p>`,
        MessageStream: 'outbound',
      }),
      postmarkClient.sendEmail({
        from: 'notifications@lifeplusworldwide.com',
        to: body.emp_email,
        subject: `Thanks for your referral`,
        htmlBody: createEmail(body),
        MessageStream: 'outbound',
      })
    ]).then(() => {
      callback(null, {
        statusCode: 200,
        body: ''
      })
    })
  } catch (e) {
    return callback(null, {
      statusCode: 500,
      body: e.message
    })
  }
}
