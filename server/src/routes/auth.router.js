const { Router } = require('express');
const loginMw = require('../middlewares/login.mw');
const registerMw = require('../middlewares/register.mw');

const authRouter = Router();

authRouter.post('/login', loginMw, (req, res) => res.send('/login'));
authRouter.post('/register', registerMw, (req, res) => res.send('/register'));

module.exports = authRouter;
