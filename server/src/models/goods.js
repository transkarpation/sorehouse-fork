const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Goods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Goods.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expirationTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Goods',
    },
  );
  return Goods;
};
