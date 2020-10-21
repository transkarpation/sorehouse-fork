const passport = require('../config/passport.config');

module.exports = passport.authenticate('login', { session: false });
