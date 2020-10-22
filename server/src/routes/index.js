const { Router } = require('express');
const authRouter = require('./auth.router');
const goodsRouter = require('./goods.router');
const unitRouter = require('./unit.router');

const indexRouter = Router();

indexRouter.use('/auth', authRouter);
indexRouter.use('/goods', goodsRouter);
indexRouter.use('/unit', unitRouter);

module.exports = indexRouter;
