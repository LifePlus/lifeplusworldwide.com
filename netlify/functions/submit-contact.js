const { validateEmail, validateLength } = require("./validations")
const postmark = require('postmark')

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

  const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_KEY)

  const addressses = {
    'Career opportunities': 'justin.flint@lifeplusworldwide.com',
    'Partner with LifePlus': 'brittany.west@lifeplusworldwide.com,rachel.scroggins@lifeplusworldwide.com',
    // 'US Employment': 'justin.flint@lifeplusworldwide.com',
    'Making a donation': 'giving@lifeplusworldwide.com'
  }

  try {
    Promise.all([
      // There was a post to RC here, but it's retired now

      postmarkClient.sendEmail({
        from: 'notifications@lifeplusworldwide.com',
        to: addressses[body.question] || 'justin.flint@lifeplusworldwide.com',
        subject: `[LifePlus] Contact Form Submission`,
        htmlBody: `<p><strong>Name:</strong><br>${body.name}</p>
          <p><strong>Question:</strong><br>${body.question}</p>
          <p><strong>Email:</strong><br>${body.email}</p>
          <p><strong>Phone:</strong><br>${body.phone || 'None provided'}</p>`
      }),
      postmarkClient.sendEmail({
        from: 'notifications@lifeplusworldwide.com',
        to: body.email,
        subject: `Thanks for your interest in LifePlus!`,
        htmlBody: autoReply
      })
    ]).then(() => {
      callback(null, {
        statusCode: 200,
        body: ''
      })
    })
  } catch (e) {
    callback(null, {
      statusCode: 200,
      body: ''
    })
  }
}
