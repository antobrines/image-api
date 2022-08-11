module.exports = (sequelize, DataTypes) => {
  const Access = sequelize.define('access', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    user: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    server: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    sizeMax: {
      type: DataTypes.INTEGER,
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
  Access.associate = (models) => {
    Access.belongsTo(models.User, {
      foreignKey: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    Access.belongsTo(models.Server, {
      foreignKey: 'server',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Access;
};