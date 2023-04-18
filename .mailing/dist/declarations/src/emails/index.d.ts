declare const sendMail: (mail: import("mailing-core").ComponentMail) => Promise<import("nodemailer/lib/smtp-pool").SentMessageInfo | "delivered!" | undefined>;
export default sendMail;
