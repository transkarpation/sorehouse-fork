require('dotenv').config();
const express = require('express');

const { APP_PORT } = require('./config/app.config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(APP_PORT, () => {
  console.log(`Listening on ${APP_PORT}`);
});
