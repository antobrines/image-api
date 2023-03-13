const nodemailer = require('nodemailer');
const config = require('../config');
const NodeCache = require('node-cache');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.password,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'no-reply@kemonas.fr',
    to: options.email,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

const generateRandomString = (length) => {
  const characters =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const saveInCache = async (key) => {
  const myCache = new NodeCache();
  const value = generateRandomString(24);
  myCache.set(key, value, 10000);
  return value;
};

const getFromCache = async (key) => {
  const myCache = new NodeCache();
  const value = myCache.get(key);
  return value;
};

module.exports = { sendEmail, saveInCache, getFromCache };
