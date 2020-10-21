const passport = require('../config/passport.config');

module.exports = passport.authenticate('register', { session: false });
