const sendEmail = require('../helpers/sendEmail');
const AppError = require('../utils/AppError');
const asyncHandler = require('../middlewares/asyncHandler');

exports.sendEmail = asyncHandler(async (req, res, next) => {
  let { to, email_body } = req.body;

  if (to == undefined || message == undefined) {
    return next(
      new AppError(
        `Please provide \'to' (receiver\'s email) and \'email_body'.`,
        403
      )
    );
  }

  await sendEmail({
    to,
    subject: 'Test',
    message: `${email_body}`,
  });

  res.json({ success: true, message: 'Email sent successfully.' });
  next();
});
