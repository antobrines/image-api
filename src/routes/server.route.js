const express = require('express');
const validate = require('../middlewares/validate');
const serverValidation = require('../validations/server.validation');
// const {
//   isConnected
// } = require('../middlewares/user.middleware');
const serverController = require('../controllers/server.controller');
const router = express.Router();

router.post(
  '/',
  validate(serverValidation.create),
  serverController.create
);

router.get(
  '/:id',
  validate(serverValidation.findOne),
  serverController.findOneById
);

router.put(
  '/:id',
  validate(serverValidation.update),
  serverController.findOneByIdAndUpdate
);

router.delete(
  '/:id',
  validate(serverValidation.remove),
  serverController.findOneByIdAndDelete
);

module.exports = router;