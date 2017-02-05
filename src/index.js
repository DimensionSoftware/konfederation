require("babel-core/register");
require("babel-polyfill");

import koa from 'koa';
import passport from 'passport';
import Router from 'koa-router';

var routes = [
  '/login',           // local
  '/logout',          // all
  '/forgot-password', // local
  '/register'         // local
];

/**
   Login POST request handler for local strategy

   @param {Function} next
   @return {Void}
*/
function *login(next) {
  next();
}

/**
   Logout GET request for all strategies

   @param {Function} next
   @return {Void}
*/
function *logout(next) {
  next();
}

/**
   Forgot Password POST request for local strategy

   @param {Function} next
   @return {Void}
*/
function *forgotPassword(next) {
  next();
}

/**
   Register POST request for local strategy

   @param {Function} next
   @return {Void}
*/
function *register(next) {
  next();
}

/**
  Return a koa app with authentication routes for the given userStorage and passport strategies.

  @param {UserStorage} userStorage
  @param {Array<PassportStrategy>} passports
  @return {Koa}
*/
function konfederation(userStorage, passports) {
  let app    = koa();
  let router = new Router();
  app.use(function *(){
    router.post(login);
    router.get(logout);
    router.post(forgotPassword);
    router.post(register);
  });
  return app;
}

module.exports = konfederation;
