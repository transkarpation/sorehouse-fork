const { Router } = require('express');

const authRouter = Router();

authRouter.post('/login', (req, res) => res.send('/login'));
authRouter.post('/register', (req, res) => res.send('/register'));

module.exports = authRouter;
