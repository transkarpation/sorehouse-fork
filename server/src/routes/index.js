const { Router } = require('express');
const authRouter = require('./auth.router');
const goodsRouter = require('./goods.router');
const unitRouter = require('./unit.router');
const categoryRouter = require('./category.router');

const indexRouter = Router();

indexRouter.use('/auth', authRouter);
indexRouter.use('/goods', goodsRouter);
indexRouter.use('/unit', unitRouter);
indexRouter.use('/category', categoryRouter);

module.exports = indexRouter;
