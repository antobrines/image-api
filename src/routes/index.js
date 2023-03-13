const userRoute = require('./user.route');
const authRoute = require('./auth.route');

const router = require('express').Router();

const routes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;