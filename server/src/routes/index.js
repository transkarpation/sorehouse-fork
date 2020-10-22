const { Router } = require('express');
const authRouter = require('./auth.router');
const goodsRouter = require('./goods.router');

const indexRouter = Router();

indexRouter.use('/auth', authRouter);
indexRouter.use('/goods', goodsRouter);

module.exports = indexRouter;
