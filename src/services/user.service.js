const { User } = require('../models');

const create = async (data) => {
  return User.create(data);
};

const findAll = async (page, size) => {
  const options = {
    page: page || 1,
    paginate: size || 10,
    order: [['firstName', 'ASC']],
    attributes: {
      exclude: ['password', 'createdAt', 'updatedAt'],
    },
  };
  return User.paginate(options);
};

const findOne = async (value, element, exclude = ['password', 'createdAt', 'updatedAt']) => {
  return User.findOne({
    where: {
      [element]: value,
    },
    attributes: {
      exclude,
    },
  });
};

const update = async (id, data) => {
  return User.update(data, {
    where: {
      id,
    },
  });
};

const remove = async (id) => {
  return User.destroy({
    where: {
      id,
    },
  });
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
