const userService = require('./user.service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { throwF } = require('../utils/message');
const { sendEmail, saveInCache } = require('../utils/mail');
const { getFromCache } = require('../utils/mail');

const register = async (data) => {
  data.password = await bcrypt.hash(data.password, 10);
  const tokenValid = await saveInCache(data.email);
  const mailOptions = {
    email: data.email,
    subject: 'Test d\'e-mail',
    text: `Votre code de vérification est: ${tokenValid}`,
  };
  await sendEmail(mailOptions);
  return userService.create(data);
};

const login = async (data) => {
  const user = await userService.findOne(data.email, 'email', [
    'createdAt',
    'updatedAt',
  ]);
  const message = 'Email or password is incorrect';
  const status = 401;
  if (!user) {
    throwF(message, status);
  }
  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    throwF(message, status);
  }
  const token = jwt.sign({ id: user.id }, config.token.secret, {
    expiresIn: config.token.expire,
  });
  return { token };
};

const verify = async (token) => {
  return jwt.verify(token, config.token.secret);
};

const confirm = async (data) => {
  const tokenValid = await getFromCache(data.email);
  if (tokenValid !== data.token) {
    throwF('Token is invalid', 401);
  }
  const toUpdate = {
    isVerified: true,
  };
  userService.update(data.email, toUpdate);
};


module.exports = {
  register,
  login,
  verify,
  confirm,
};
