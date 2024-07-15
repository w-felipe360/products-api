module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  product.associate = (models) => {
    product.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return product;
};
