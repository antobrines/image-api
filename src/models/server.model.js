module.exports = (sequelize, DataTypes) => {
  const Server = sequelize.define('server', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  Server.associate = (models) => {
    Server.hasMany(models.File, {
      foreignKey: 'server',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    Server.hasMany(models.Access, {
      foreignKey: 'server',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Server;
};