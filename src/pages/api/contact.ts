
// import twilio from 'twilio';
// import sgMail from '@sendgrid/mail';
// import { MailDataRequired } from '@sendgrid/mail';
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

// const sgMail = require('@sendgrid/mail');
// const twilio = require('twilio');
// require('dotenv').config();

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// const sendEmail = (toEmail: string, subject: string, text: string) => {
//   const msg = {
//     to: toEmail,
//     from: process.env.FROM_EMAIL_ADDRESS,
//     subject: subject,
//     text: text,
//     html: `<p>${text}</p>`
//   };

//   return sgMail.send(msg);
// }

// const sendSMS = (toNumber: string, message: string) => {
//   return twilioClient.messages.create({
//     body: message,
//     from: process.env.TWILIO_PHONE_NUMBER,
//     to: process.env.RECIPIENT_PHONE_NUMBER

//   });
// }

// // Example usage
// sendEmail('recipient@example.com', 'Test Email', 'This is a test email.')
//   .then(() => console.log('Email sent.'))
//   .catch((error: any) => console.error(error));

// sendSMS('+1234567890', 'This is a test SMS.')
//   .then(() => console.log('SMS sent.'))
//   .catch((error: any) => console.error(error));

// import { useState } from 'react';

// export default function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [phone, setPhone] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('/api/send-sms', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email, message, phone })
//       });

//       const data = await response.json();
//       setLoading(false);

//       if (!response.ok) {
//         setError(data.error);
//         return;
//       }

//       // Handle successful form submission
//     } catch (error) {
//       console.error(error);
//       setError('Failed to submit form.');
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       // Render form input fields
//     </form>
//   );
// }


// import type { NextApiRequest, NextApiResponse } from 'next'
// import twilio from 'twilio'

// const accountSid = 'YOUR_ACCOUNT_SID';
// const authToken = 'YOUR_AUTH_TOKEN';
// const client = twilio(accountSid, authToken);

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { name, email, message, phone } = req.body;

//   // Send SMS message using Twilio
//   client.messages
//     .create({
//       body: `New contact form submission from ${name} (${email}): ${message}`,
//       from: 'YOUR_TWILIO_PHONE_NUMBER',
//       to: phone
//     })
//     .then(() => {
//       res.status(200).json({ success: true });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to send SMS message.' });
//     });
// }

// const accountSid = 'AC9bafb65aff4eecfd5eca2a761ed78982';
// const authToken = 'f10b4667727c0d31f19a453993c2d9ac';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         body: 'Hello Shashank, Have a  nice day',
//         from: '+14345776835',
//         to: '+917349012319'
//     })
//     .then((message: { sid: any; }) => console.log(message.sid))
//     .done();

import express, { Request, Response } from 'express';
import twilio from 'twilio';

const app = express();

const accountSid: string = 'AC9bafb65aff4eecfd5eca2a761ed78982';
const authToken: string = 'f10b4667727c0d31f19a453993c2d9ac';

// app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.post("/sendMessage", async (req: Request, res: Response) => {
    const client = twilio(accountSid, authToken);
    client.messages
        .create({ 
            body: req.body.message, 
            from: "+14345776835", 
            to: req.body.number 
        })
        .then(message => {
            console.log(`Message sent to ${message.to}: ${message.body}`);
            res.send(`Message sent to ${message.to}: ${message.body}`);
        })
        .catch(error => {
            console.log(error);
            res.send(`Error sending message to ${req.body.number}`);
        });
});

app.get('/',(req: Request, res: Response) => {
    res.render('product.tsx')
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
