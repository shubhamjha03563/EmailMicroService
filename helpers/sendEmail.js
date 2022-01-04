const nodemailer = require('nodemailer');

/*
For testing with mailtrap

const mailTrapTransporter = {
  host: 'smtp.mailtrap.io',
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_ID,
    pass: process.env.MAILTRAP_PASSWORD,
  },
};
*/

/*
options = {
  to,
  from,
  fromName,
  email_password,
  subject,
  email_body,
}
*/
const sendEmail = async (options) => {
  const gmailTransporter = {
    service: 'gmail',
    auth: {
      user: options.from,
      pass: options.email_password,
    },
  };

  // create transporter
  const transporter = nodemailer.createTransport(gmailTransporter);

  const message = {
    from: `${options.fromName} <${options.from}>`,
    to: options.to,
    subject: options.subject,
    text: options.email_body,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;
