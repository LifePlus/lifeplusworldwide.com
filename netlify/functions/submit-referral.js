const nodemailer = require('nodemailer')
const axios = require('axios')

const createEmail = body => {
  return `<p>Dear ${body.emp_name},</p>
<p>This email is to thank you for referring ${body.ref_name}.</p>
<p>As you know, referrals are one of our best sources of new hires, and your effort is extremely valuable to us. We will let you know about the status of your referred candidate(s).</p>
<p>Thanks once again!</p>`
}

exports.handler = (event, context, callback) => {
  let transporter
  let body

  try {
    body = JSON.parse(event.body)

    // Create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })
  } catch (err) {
    return callback(null, {
      statusCode: 500,
      body: err.message
    })
  }

  try {
    // send mail with defined transport object
    Promise.all([
      axios.post(`https://chat.ldiglobal.org/hooks/bJm8whxGme9KyzYGA/YYEj5kN6eeQZDPpFXtQ9GqX8BK2cn4ckX6KNouPpzrQqA3y2`, {
        attachments: [{
          fields: [
            {
              title: 'Employee Name',
              value: body.emp_name,
              short: true
            },
            {
              title: 'Employee Email',
              value: body.emp_email,
              short: true
            },
            {
              title: 'Referral Name',
              value: body.ref_name,
              short: true
            },
            {
              title: 'Referral Email',
              value: body.ref_email,
              short: true
            },
          ]
        }]
      }),
      transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: 'brittany.west@lifeplusworldwide.com',
        subject: `[Employee Referral] Referral Form Submission`,
        html: `<p><strong>Employee Name:</strong><br>${body.emp_name}</p>
          <p><strong>Employee Email:</strong><br>${body.emp_email}</p>
          <p><strong>Applicant Name:</strong><br>${body.ref_name}</p>
          <p><strong>Applicant Email:</strong><br>${body.ref_email || 'None provided'}</p>`
      }),
      transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: body.emp_email,
        subject: `Thanks for your referral`,
        html: createEmail(body)
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
