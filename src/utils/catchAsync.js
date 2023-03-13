const {
  errorF
} = require('../utils/message');

const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    const code = error.status || 500;
    errorF(error.message, error, code, res, next);
  });
};

module.exports = catchAsync;