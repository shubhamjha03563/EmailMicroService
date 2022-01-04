const sendEmail = require('../helpers/sendEmail');
const AppError = require('../utils/AppError');
const asyncHandler = require('../middlewares/asyncHandler');
const checkFields = require('../helpers/checkFields');

exports.sendEmail = asyncHandler(async (req, res, next) => {
  checkFields(
    req.body,
    'body json',
    ['to', 'from', 'fromName', 'email_password', 'email_body'],
    next
  );

  let { to, from, fromName, email_password, subject, email_body } = req.body;

  let options = {
    to,
    from,
    fromName,
    email_password,
    subject,
    email_body,
  };

  try {
    await sendEmail(options);

    res.json({
      success: true,
      message: 'Email sent successfully.',
      data: null,
    });
  } catch (err) {
    return next(
      new AppError(
        `Email could not be sent. Please check the email credentials OR enable login from less secure apps (https://www.google.com/settings/security/lesssecureapps).`
      )
    );
  }

  next();
});
