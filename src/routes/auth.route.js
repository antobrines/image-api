const authController = require('../controllers/auth.controller');
const router = require('express').Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authMiddleware.isConnected ,authController.me);

module.exports = router;