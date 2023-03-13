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
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;

// Models/tables
db.User = require('./user.model')(sequelize, DataTypes);
db.Site = require('./site.model')(sequelize, DataTypes);
db.Permission = require('./permission.model')(sequelize, DataTypes);
db.File = require('./file.model')(sequelize, DataTypes);

// Relations
db.User.hasMany(db.Permission);
db.User.belongsToMany(db.Site, { through: db.Permission });
db.Site.hasMany(db.File);
db.Site.belongsToMany(db.User, { through: db.Permission });
db.Permission.belongsTo(db.User);
db.Permission.belongsTo(db.Site);
db.File.belongsTo(db.Site);
db.File.belongsTo(db.User);


module.exports = db;
