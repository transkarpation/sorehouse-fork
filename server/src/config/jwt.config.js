module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'keyboardcat',
  routesWhiteList: ['/api/auth/register/', '/api/auth/login/'],
};
