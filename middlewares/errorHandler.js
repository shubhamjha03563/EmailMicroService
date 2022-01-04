const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.statusCode = 200 || err.status;

  console.log(err);
  res.status(error.statusCode).json({
    success: false,
    message: error.message || err.message,
    data: null,
  });
  next();
};

module.exports = errorHandler;
