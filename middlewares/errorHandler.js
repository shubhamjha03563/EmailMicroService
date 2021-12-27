const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.statusCode = 200 || err.status;

  console.log(err);
  res.status(error.statusCode).json({
    message: error.message || err.message,
  });
  next();
};

module.exports = errorHandler;
