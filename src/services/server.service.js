const {
  Server
} = require('../models');

const create = async (serverBody) => {
  return Server.create(serverBody);
};

const findOneById = async (id) => {
  return Server.findOne({
    where: {
      id: id
    }
  });
};

const findOneByIdAndUpdate = async (id, update) => {
  return Server.update(update, {
    where: {
      id: id
    }
  }, {
    returning: true,
    plain: true
  });
};

const findOneByIdAndDelete = async (id) => {
  return Server.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  create,
  findOneById,
  findOneByIdAndUpdate,
  findOneByIdAndDelete
};