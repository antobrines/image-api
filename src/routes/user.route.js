const userController = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

module.exports = router;