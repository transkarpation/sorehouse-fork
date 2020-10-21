const { Router } = require('express');
const authRouter = require('./auth.router');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.send('hello');
});
indexRouter.use('/auth', authRouter);

module.exports = indexRouter;
