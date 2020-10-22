const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contragent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   User.hasMany(models.Post);
    // }
  }
  Contragent.init(
    {
      firsName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyAdress: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Contragent',
    },
  );
  return Contragent;
};
