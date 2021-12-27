const nodemailer = require('nodemailer');

// create transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_ID,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

const sendEmail = async (options) => {
  const message = {
    from: `Test user`,
    to: options.to,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;
