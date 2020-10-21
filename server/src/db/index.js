const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const db = {};
const dirname = path.resolve(__dirname, '..', 'models');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  logging: false,
});

fs.readdirSync(dirname)
  .filter((file) => file.indexOf('.') !== 0 && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(path.join(dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
