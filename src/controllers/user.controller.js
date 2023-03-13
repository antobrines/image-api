const userService = require('../services/user.service');
const catchAsync = require('../utils/catchAsync');
const { successF } = require('../utils/message');

const findAll = catchAsync(async (req, res, next) => {
  const { page, size } = req.query;
  const users = await userService.findAll(page, size);
  successF('Users found', users, 200, res, next);
});

const findOne = catchAsync(async (req, res, next) => {
  const user = await userService.findOne(req.params.id, 'id');
  successF('User found', user, 200, res, next);
});

const update = catchAsync(async (req, res, next) => {
  const user = await userService.update(req.params.id, req.body);
  successF('User updated', user, 200, res, next);
});

const remove = catchAsync(async (req, res, next) => {
  const user = await userService.remove(req.params.id);
  successF('User deleted', user, 200, res, next);
});

module.exports = {
  findAll,
  findOne,
  update,
  remove,
};

