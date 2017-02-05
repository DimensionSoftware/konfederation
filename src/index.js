require("babel-core/register");
require("babel-polyfill");

import koa from 'koa';
import passport from 'passport';

var routes = [
  '/login',
  '/logout',
  '/forgot-password',
  '/register'
];

/**
  Return a koa app with authentication routes for the given userStorage and passport strategies.

  @param {UserStorage} userStorage
  @param {Array<PassportStrategy>} passports
  @return {Koa}
*/
function konfederation(userStorage, passports) {
  let app = koa();
  app.use(function *(){
    this.body = 'Hello, World!';
  });
  return app;
}

module.exports = konfederation;
