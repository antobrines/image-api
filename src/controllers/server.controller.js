const serverService = require('../services/server.service');
const httpStatus = require('http-status');
const {
  successF
} = require('../utils/message');
const constant = require('../config/constant');
const catchAsync = require('../utils/catchAsync');

const create = catchAsync(async (req, res, next) => {
  const serverCreated = await serverService.create(req.body);
  successF('Server created', serverCreated.dataValues, httpStatus.OK, res, next);
});

const findOneById = catchAsync(async (req, res, next) => {
  const server = await serverService.findOneById(req.params.id);
  successF(constant.server.success.connected, server, httpStatus.OK, res, next);
});

const findOneByIdAndUpdate = catchAsync(async (req, res, next) => {
  const serverUpdated = await serverService.findOneByIdAndUpdate(req.params.id, req.body);
  successF(constant.server.success.updated, serverUpdated, httpStatus.OK, res, next);
});

const findOneByIdAndDelete = catchAsync(async (req, res, next) => {
  const serverDeleted = await serverService.findOneByIdAndDelete(req.params.id);
  successF(constant.server.success.deleted, serverDeleted, httpStatus.OK, res, next);
});

module.exports = {
  create,
  findOneById,
  findOneByIdAndUpdate,
  findOneByIdAndDelete
};