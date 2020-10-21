const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportJwt = require('passport-jwt');
const bcryptjs = require('bcryptjs');

const { User } = require('../db');
const { jwtSecret } = require('./jwt.config');

passport.use(
  'register',
  new LocalStrategy(
    { passReqToCallback: true, usernameField: 'email' },
    async (req, email, password, next) => {
      const userByEmail = await User.findOne({
        where: {
          email,
        },
      });

      if (userByEmail) {
        return next(null, null);
      }

      const { firstName, lastName } = req.body;

      let user = await User.create(
        {
          email,
          firstName,
          lastName,
          password: bcryptjs.hashSync(password, 8),
        },
      );

      user = user.toJSON();
      delete user.password;
      delete user.updatedAt;
      delete user.createdAt;

      return next(null, user);
    },
  ),
);

passport.use(
  'login',
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, next) => {
      const userByEmail = await User.findOne({ where: { email } });

      if (!userByEmail) {
        return next(null, null);
      }

      if (!bcryptjs.compareSync(password, userByEmail.password)) {
        return next(null, null);
      }

      return next(null, userByEmail);
    },
  ),
);

passport.use(
  'jwt',
  new passportJwt.Strategy(
    {
      jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
    },
    async ({ id }, next) => {
      try {
        const user = await User.findByPk(id);
        return next(null, user);
      } catch (e) {
        return next(null, null);
      }
    },
  ),
);

module.exports = passport;
