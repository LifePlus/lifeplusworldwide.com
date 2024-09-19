const { validateEmail, validateLength } = require("./validations")
const postmark = require('postmark')

const autoReply = `<p>Greetings,</p>
<p>Thank you for your interest in LifePlus. We have received your inquiry and we will be in touch with you soon.</p>
<p>Warm regards,<br>
LifePlus</p>`

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
    'Career opportunities': 'brittany.west@lifeplusworldwide.com,justin.flint@lifeplusworldwide.com',
    'Partner with LifePlus': 'brittany.west@lifeplusworldwide.com,rachel.scroggins@lifeplusworldwide.com',
    // 'US Employment': 'justin.flint@lifeplusworldwide.com',
    'Making a donation': 'giving@lifeplusworldwide.com',
    'Student records request': 'records@lifeplusworldwide.com',
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
          <p><strong>Phone:</strong><br>${body.phone || 'None provided'}</p>
          <p><strong>Message:</strong><br>${body.message || 'None provided'}</p>
          ${body.question === 'Student records request' ? `<p><strong>School:</strong> ${body.school || 'None provided'}</p>` : ''}
          ${body.question === 'Student records request' ? `<p><strong>Years Attended:</strong> ${body.years || 'None provided'}</p>` : ''}`
      }),
      postmarkClient.sendEmail({
        from: 'notifications@lifeplusworldwide.com',
        to: body.email,
        subject: `We got your message`,
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
