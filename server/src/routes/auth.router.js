const { Router } = require('express');
const loginMw = require('../middlewares/login.mw');
const registerMw = require('../middlewares/register.mw');
const ctrl = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/login', loginMw, ctrl.sendUser);
authRouter.post('/register', registerMw, ctrl.sendUser);

module.exports = authRouter;
