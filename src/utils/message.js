const responses = require('../models/response');
const config = require('../config');

const errorF = (message, error, code, res, next) => {
  res.status(code);
  if (config.environment == 'production') {
    res.json(
      new responses(message, {})
    );
  } else {
    res.json(
      new responses(message, `${error}`)
    );
  }
  return next(res);
};

const successF = (message, body, code, res, next) => {
  res.status(code);
  res.json(
    new responses(message, body)
  );
  return next(res);
};

const throwF = (message, code) => {
  const error = new Error(message);
  error.status = code;
  throw error;
};

module.exports = {
  errorF,
  successF,
  throwF,
};