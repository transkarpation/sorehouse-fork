const generateToken = require('../helpers/jwt.helper');

module.exports = {
  async sendUser(req, res) {
    const token = generateToken(req.user);

    res.send({ token, user: req.user });
  },
};
