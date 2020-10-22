require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const { sequelize } = require('./db');
const router = require('./routes');
const { APP_PORT } = require('./config/app.config');

const app = express();

sequelize.authenticate().then(async () => {
  // sequelize.sync({ force: true });
  sequelize.sync();

  app.use(express.json());
  app.use(morgan('tiny'));
  app.use('/api', router);

  app.listen(APP_PORT, () => {
    console.log(`Listening on ${APP_PORT}`);
  });
});
