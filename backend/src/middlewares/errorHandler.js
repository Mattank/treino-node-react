function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      message: statusCode === 500 ? "Internal Server Error" : err.message,
    },
  });
}
module.exports = { errorHandler };
