const passport = require('../config/passport.config');

function isUrlInWhiteList(url, routesWhiteList) {
  return routesWhiteList.some((route) => {
    const regExpString = `^${route}$`.replace('*', '.*');
    const regExp = new RegExp(regExpString);

    return regExp.test(url);
  });
}

function authenticateJwt(routesWhiteList) {
  return (req, res, next) => (
    isUrlInWhiteList(req.originalUrl, routesWhiteList)
      ? next()
      : passport.authenticate('jwt', { session: false })(req, res, next)
  );
}

module.exports = authenticateJwt;
