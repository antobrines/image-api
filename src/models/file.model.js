module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('file', {
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
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    server: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  File.associate = (models) => {
    File.belongsTo(models.User, {
      foreignKey: 'createdBy',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    File.belongsTo(models.Server, {
      foreignKey: 'server',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return File;
};