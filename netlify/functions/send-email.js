const nodemailer = require('nodemailer')

const autoReply = `<p>Dear LifePlus Team Member,</p>
<p>Thank you for your interest in the referral program! We will let you know when the candidate has been hired and then we will contact you about receiving the referral award. Word-of-mouth is the most successful way to hire called and qualified candidates, so we appreciation your recommendations. We could not do this without you!</p>
<p>Thank you,</p>
<p>Mobilization and Recruitment Team</p>`

exports.handler = (event, context, callback) => {
  let transporter
  let body

  try {
    body = JSON.parse(event.body)

    // Create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
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

  // verify connection configuration
  return transporter.verify().then(() => {
    return callback(null, {
      statusCode: 200,
      body: 'Verified successfullly'
    })
  }).catch(err => {
    return callback(null, {
      statusCode: 500,
      body: err.message
    })
  })

  try {
    // send mail with defined transport object
    Promise.all([
      transporter.sendMail({
        from: `"no-reply" <no-reply@ldiglobal.org>`,
        to: 'website-email-test@ldi.global',
        subject: `Thanks for your referral`,
        html: autoReply
      }),
      transporter.sendMail({
        from: `"no-reply" <no-reply@ldiglobal.org>`,
        to: 'website-email-test@ldi.global',
        subject: `Contact Form Submission`,
        html: `<p><strong>Name:</strong><br>${body.name}</p>
          <p><strong>Question:</strong><br>${body.question}</p>`
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
