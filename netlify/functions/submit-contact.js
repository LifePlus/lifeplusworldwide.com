const axios = require('axios')
const { validateEmail, validateLength } = require("./validations")
const nodemailer = require('nodemailer')

const autoReply = `<p>Greetings,</p>
<p>Thank you for your interest in LifePlus. We have received your inquiry and we will be in touch with you soon.</p>
<p>If you have submitted an employment application, then we will contact you directly if you have been selected for the next stage of the application process.</p>
<p>Warm regards,<br>
Mobilization and Recruitment</p>`

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body)

  // Validate some stuff
  try {
    validateLength(`Name`, body.name, 3, 50)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

  try {
    validateLength(`Question`, body.question, 3, 50)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

  try {
    validateEmail(`Email`, body.email)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

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

  const addressses = {
    'Career opportunities': 'justin.flint@ldius.org',
    'Partner with LifePlus': 'brittany.west@ldius.org,rachel.scroggins@ldi.global',
    // 'US Employment': 'justin.flint@ldius.org',
    'Making a donation': 'giving@ldius.org'
  }

  try {
    Promise.all([
      axios.post(process.env.CONTACT_RC_ROOM, {
        attachments: [{
          fields: [
            {
              title: 'Name',
              value: body.name,
              short: true
            },
            {
              title: 'Email',
              value: body.email,
              short: true
            },
            {
              title: 'Phone',
              value: body.phone,
              short: true
            },
            {
              title: 'Question',
              value: body.question,
              short: true
            }
          ]
        }]
      }),
      transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: addressses[body.question] || 'justin.flint@ldius.org',
        subject: `[LifePlus] Contact Form Submission`,
        html: `<p><strong>Name:</strong><br>${body.name}</p>
          <p><strong>Question:</strong><br>${body.question}</p>
          <p><strong>Email:</strong><br>${body.email}</p>
          <p><strong>Phone:</strong><br>${body.phone || 'None provided'}</p>`
      }),
      transporter.sendMail({
        to: body.email,
        subject: `Thanks for your interest in LifePlus!`,
        html: autoReply
      })
    ]).then(() => {
      callback(null, {
        statusCode: 200,
        body: ''
      })
    })
  } catch (e) {
    axios.post(process.env.CONTACT_RC_ROOM, {
      text: `Sending email failed: ${e.message}`
    }).then(() => {
      // Still be successful since RC is ok
      callback(null, {
        statusCode: 200,
        body: ''
      })
    })

  }
}
