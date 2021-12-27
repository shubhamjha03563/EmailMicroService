const express = require('express');
require('colors');

// import .env variables
const dotenv = require('dotenv');
dotenv.config({ path: './config/vars.env' });
const app = express();

// error handler
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const emailRoute = require('./routes/emailRoutes');
app.use('/email', emailRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}...`.cyan.bold);
});

app.use(errorHandler);
