require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const { sequelize } = require('./db');
const passport = require('./config/passport.config');
const router = require('./routes');
const { APP_PORT } = require('./config/app.config');
const authenticateJwt = require('./middlewares/jwt.mw');
const { routesWhiteList } = require('./config/jwt.config');

const app = express();

sequelize.authenticate().then(async () => {
  // sequelize.sync({ force: true });
  sequelize.sync();

  app.use(express.json());
  passport.initialize();

  app.use(morgan('tiny'));
  app.use('/api', authenticateJwt(routesWhiteList), router);

  app.listen(APP_PORT, () => {
    console.log(`Listening on ${APP_PORT}`);
  });
});
