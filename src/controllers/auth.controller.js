const authService = require('../services/auth.service');
const userService = require('../services/user.service');
const catchAsync = require('../utils/catchAsync');
const { successF } = require('../utils/message');

const register = catchAsync(async (req, res, next) => {
  const user = await authService.register(req.body);
  successF('User created', user, 201, res, next);
});

const login = catchAsync(async (req, res, next) => {
  const user = await authService.login(req.body);
  successF('User logged in', user, 200, res, next);
});

const me = catchAsync(async (req, res, next) => {
  const user = await userService.findOne(req.user.id, 'id');
  successF('Me', user, 200, res, next);
});

const confirm = catchAsync(async (req, res, next) => {
  const user = await authService.confirm(req.body);
  successF('User confirmed', user, 200, res, next);
});

module.exports = {
  register,
  login,
  me,
  confirm,
};