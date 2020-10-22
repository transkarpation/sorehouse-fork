const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/jwt.config');

module.exports = (user) => jwt.sign({ id: user.id }, jwtSecret);
