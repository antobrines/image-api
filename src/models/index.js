const {
  Sequelize,
  DataTypes
} = require('sequelize');
const config = require('../config');
const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: config.db.dialect,
  operatorsAliases: false,
});

const db = {};
db.sequelize = sequelize;
db.DataTypes = DataTypes;

db.User = require('./user.model')(sequelize, DataTypes);
db.File = require('./file.model')(sequelize, DataTypes);
db.Server = require('./server.model')(sequelize, DataTypes);
db.Access = require('./access.model')(sequelize, DataTypes);

module.exports = db;