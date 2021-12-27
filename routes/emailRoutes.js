const express = require('express');
const router = express.Router();

const { sendEmail } = require('../controllers/emailControllers');

router.route('/send').post(sendEmail);

module.exports = router;
