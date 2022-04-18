const axios = require('axios')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL)

const fail = err => {
  return {
    statusCode: 400,
    body: JSON.stringify(err),
  }
}

const respond = (fulfillmentText = { received: true }) => {
  return {
    statusCode: 200,
    body: JSON.stringify(fulfillmentText),
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  }
}

const getRcMessage = body => ({
  attachments: [
    {
      title: 'Student Information',
      fields: [
        {
          title: 'Family Name',
          value: body.student_family_name,
        },
        {
          title: 'First Name',
          value: body.student_first_name,
        },
        {
          title: 'Preferred Name',
          value: body.student_preferred_name,
        },
        {
          title: 'DOB',
          value: body.student_dob,
        },
        {
          title: 'Gender',
          value: body.student_gender,
        },
        {
          title: 'Birthplace',
          value: body.student_birthplace,
        },
        {
          title: 'Passport Country',
          value: body.student_pp_country,
        },
        {
          title: 'Language',
          value: body.student_language,
        },
        {
          title: 'Grade',
          value: body.student_grade,
        },
        {
          title: 'Residence',
          value: body.student_residence,
        },
        {
          title: 'Home Language',
          value: body.student_home_language,
        },
        {
          title: 'Learning Difficulties',
          value: body.student_learning_difficulties,
        },
        {
          title: 'Meds',
          value: body.student_meds,
        },
      ]
    },
    {
      title: 'Mother Information',
      fields: [
        {
          title: 'Family Name',
          value: body.mom_family_name,
        },
        {
          title: 'First Name',
          value: body.mom_first_name,
        },
        {
          title: 'Phone',
          value: body.mom_phone,
        },
        {
          title: 'Email',
          value: body.mom_email,
        },
        {
          title: 'Passport Country',
          value: body.mom_pp_country,
        },
        {
          title: 'Preferred Contact Method',
          value: body.mom_contact,
        },
      ]
    },
    {
      title: 'Father Information',
      fields: [
        {
          title: 'Family Name',
          value: body.dad_family_name,
        },
        {
          title: 'First Name',
          value: body.dad_first_name,
        },
        {
          title: 'Phone',
          value: body.dad_phone,
        },
        {
          title: 'Email',
          value: body.dad_email,
        },
        {
          title: 'Passport Country',
          value: body.dad_pp_country,
        },
        {
          title: 'Preferred Contact Method',
          value: body.dad_contact,
        },
      ]
    },
  ]
})

exports.handler = async (event, context, callback) => {
  let body

  try {
    body = JSON.parse(event.body)
  } catch (err) {
    return fail(err)
  }

  // Post to RC
  try {
    await axios.post(`https://chat.ldiglobal.org/hooks/82bWTp5LipDGBQdm6/uSqgnSfxA8hXXpqTSFgrQn4kRAAxg5usdRbeLs2BXAzdBk4j`, getRcMessage(body))
  } catch (err) {
    return fail(err)
  }

  // Send to Sheets
  // Load the document
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  })
  await doc.loadInfo()

  try {
    await addRow(doc, body)
  } catch (err) {
    return fail(err)
  }

  return respond()
}

async function addRow (doc, body) {
  const sheet = doc.sheetsByIndex[0]

  await sheet.addRow([
    body.student_family_name,
    body.student_first_name,
    body.student_preferred_name,
    body.student_dob,
    body.student_gender,
    body.student_birthplace,
    body.student_pp_country,
    body.student_language,
    body.student_grade,
    body.student_residence,
    body.student_home_language,
    body.student_learning_difficulties,
    body.student_meds,
    body.mom_family_name,
    body.mom_first_name,
    body.mom_email,
    body.mom_country_code,
    body.mom_phone,
    body.mom_pp_country,
    body.mom_contact,
    body.dad_family_name,
    body.dad_first_name,
    body.dad_email,
    body.dad_country_code,
    body.dad_phone,
    body.dad_pp_country,
    body.dad_contact,
    body.how_hear,
    body.how_hear_rep,
  ])
}
