// import { MailService } from '@sendgrid/mail/src/mail';
// import twilio from 'twilio';
// import sgMail from '@sendgrid/mail';

// export default async function handler(req: any, res: any) {
//   const accountSid = 'AC9bafb65aff4eecfd5eca2a761ed78982';
//   const authToken = '8b4d35d24ec0fe70f18f38210d6df098';
//   const client = twilio(accountSid, authToken);

//   try {
//     const message = await client.messages.create({
//       body: 'Hello from Twilio!',
//       from: '+14345776835', 
//       to: '+917349012319', 
//     });

//     console.log(message.sid);
//     res.status(200).send('SMS sent successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error sending SMS');
//   }
// }

// const sgMail = require ('@sendgrid/mail')

// const API_KEY = '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';

// sgMail.setApiKey(API_KEY)

// const message = {
//   to: 'shashank.g2100@gmail.com',
//   from: '21bcs107@iiitdwd.ac.in',

// }

// import twilio from 'twilio';
// import sgMail from '@sendgrid/mail';

// const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// twilioClient.messages.create({
//   body: 'This is a test SMS sent using Twilio!',
//   from: '+14345776835', // Your Twilio phone number
//   to: '+917349012319', // The recipient's phone number
// })
// .then(() => {
//   console.log('SMS sent');
// })
// .catch((error) => {
//   console.error(error);
// });

// const msg = {
//   to: 'recipient@example.com',
//   from: 'sender@example.com',
//   subject: 'Test email',
//   text: 'This is a test email sent using Twilio and SendGrid!',
//   html: '<p>This is a test email sent using Twilio and SendGrid!</p>',
// };

// sgMail.send(msg)
//   .then(() => {
//     console.log('Email sent');
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// import twilio from 'twilio';
// import sgMail from '@sendgrid/mail';

// const twilioClient = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// twilioClient.messages.create({
//   body: 'This is a test SMS sent using Twilio!',
//   from: '+14345776835', // Your Twilio phone number
//   to: '+917349012319', // The recipient's phone number
// })
// .then(() => {
//   console.log('SMS sent');
// })
// .catch((error) => {
//   console.error(error);
// });

// const msg = {
//   to: 'sharath.g2100@gmail.com',
//   from: '21bcs107@iiitdwd.ac.in',
//   subject: 'Test email',
//   text: 'This is a test email sent using Twilio and SendGrid!',
//   html: '<p>This is a test email sent using Twilio and SendGrid!</p>',
// };

// sgMail.send(msg)
//   .then(() => {
//     console.log('Email sent');
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// import twilio from 'twilio';
// import sgMail from '@sendgrid/mail';
// require('dotenv').config(); // Load environment variables from .env file

// const twilioClient = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// twilioClient.messages.create({
//   body: 'This is a test SMS sent using Twilio!',
//   from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
//   to: process.env.RECIPIENT_PHONE_NUMBER, // The recipient's phone number
// })
// .then(() => {
//   console.log('SMS sent');
// })
// .catch((error) => {
//   console.error(error);
// });

// const msg = {
//   to: process.env.TO_EMAIL_ADDRESS,
//   from: process.env.FROM_EMAIL_ADDRESS,
//   subject: 'Test email',
//   text: 'This is a test email sent using Twilio and SendGrid!',
//   html: '<p>This is a test email sent using Twilio and SendGrid!</p>',
// };

// sgMail.send(msg)
//   .then(() => {
//     console.log('Email sent');
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const sgMail = require('@sendgrid/mail');
const twilio = require('twilio');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendEmail = (toEmail: string, subject: string, text: string) => {
  const msg = {
    to: toEmail,
    from: process.env.FROM_EMAIL_ADDRESS,
    subject: subject,
    text: text,
    html: `<p>${text}</p>`
  };

  return sgMail.send(msg);
}

const sendSMS = (toNumber: string, message: string) => {
  return twilioClient.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.RECIPIENT_PHONE_NUMBER

  });
}

// Example usage
sendEmail('recipient@example.com', 'Test Email', 'This is a test email.')
  .then(() => console.log('Email sent.'))
  .catch((error: any) => console.error(error));

sendSMS('+1234567890', 'This is a test SMS.')
  .then(() => console.log('SMS sent.'))
  .catch((error: any) => console.error(error));