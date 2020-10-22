const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StoreItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StoreItem.belongsTo(models.Store);
      StoreItem.belongsTo(models.Goods);
      StoreItem.belongsTo(models.Unit);
      StoreItem.belongsTo(models.Contragent);
    }
  }
  StoreItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      amount: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'StoreItem',
    },
  );
  return StoreItem;
};
