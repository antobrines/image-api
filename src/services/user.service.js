const {
  User,
  Access
} = require('../models');
const bcrypt = require('bcryptjs');
const config = require('../config');
const jwt = require('jsonwebtoken');
const compareAsync = (param1, param2) => {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(param1, param2, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const create = async (userBody) => {
  if (userBody.password)
    userBody.password = bcrypt.hashSync(userBody.password, 10);
  return User.create(userBody);
};

const findOneByEmail = async (email) => {
  return User.findOne({
    where: {
      email: email
    }
  });
};

const findOneById = async (id) => {
  return User.findOne({
    where: {
      id: id
    }
  });
};

const findOneByIdAndUpdate = async (id, update) => {
  return await User.update(update, {
    where: {
      id: id
    }
  });
};

const findOneByIdAndDelete = async (id) => {
  return await User.destroy({
    where: {
      id: id
    }
  });
};

// get all access of user
const getAccessUser = async (id) => {
  return await User.findOne({
    where: {
      id: id
    },
    include: [{
      model: Access,
      as: 'access',
    }]
  });
};

const login = async (req) => {
  const {
    email,
    password
  } = req.body;

  const user = await findOneByEmail(email);

  if (!user) {
    return 'Invalid Credentiel';
  }

  const isValid = await compareAsync(password, user.password);
  if (isValid) {
    return await jwt.sign({
      email: user.email,
      username: user.username,
      id: user.id
    }, config.token.secret);
  } else {
    return 'Invalid Credentiel';
  }
};

module.exports = {
  create,
  login,
  findOneById,
  findOneByIdAndUpdate,
  findOneByIdAndDelete,
  findOneByEmail,
  getAccessUser
};