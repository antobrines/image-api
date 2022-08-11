/* eslint-disable indent */
const express = require('express');
const authRoute = require('./user.route');
const serverRoute = require('./server.route');
const router = express.Router();

const defaultRoutes = [{
  path: '/users',
  route: authRoute,
}, {
  path: '/servers',
  route: serverRoute,
}];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;