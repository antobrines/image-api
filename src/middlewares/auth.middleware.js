const authServices = require('../services/auth.service');
const { throwF } = require('../utils/message');
const catchAsync = require('../utils/catchAsync');

const isConnected = catchAsync(async (req, res, next) => {
  if(!req.headers.authorization) {
    throwF('Token is required', 401);
  }
  const token = req.headers.authorization.split('Bearer ')[1];
  if(!token) {
    throwF('Token is required', 401);
  }
  const user = await authServices.verify(token);
  req.user = user;
  next();
});

module.exports = {
  isConnected,
};