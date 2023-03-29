import twilio from 'twilio';

export default async function handler(req: any, res: any) {
  const accountSid = 'AC9bafb65aff4eecfd5eca2a761ed78982';
  const authToken = '8b4d35d24ec0fe70f18f38210d6df098';
  const client = twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      body: 'Hello from Twilio!',
      from: '+14345776835', 
      to: '+917349012319', 
    });

    console.log(message.sid);
    res.status(200).send('SMS sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending SMS');
  }
}
