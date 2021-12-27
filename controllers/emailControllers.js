const sendEmail = require('../helpers/sendEmail');
const AppError = require('../utils/AppError');
const asyncHandler = require('../middlewares/asyncHandler');

exports.sendEmail = asyncHandler(async (req, res, next) => {
  let { to, message } = req.body;

  if (to == undefined || message == undefined) {
    return next(
      new AppError(
        `Please provide \'to' (receiver\'s email) and \'message'.`,
        403
      )
    );
  }

  await sendEmail({
    to,
    subject: 'Test',
    message: `${message}`,
  });

  res.json({ success: true, message: 'Email sent successfully.' });
  next();
});
