const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .required(),
  })
};

const update = {
  body: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .required(),
  }),
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const remove = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const findOne = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  create,
  update,
  remove,
  findOne,
};