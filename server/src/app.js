require('dotenv').config();
const express = require('express');

const { sequelize } = require('./db');
const { APP_PORT } = require('./config/app.config');

const app = express();

sequelize.authenticate().then(async () => {
  app.listen(APP_PORT, () => {
    console.log(`Listening on ${APP_PORT}`);
  });
});
