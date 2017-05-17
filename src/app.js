import Koa        from 'koa';
import Router     from 'koa-router';
import convert    from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import passport   from 'koa-passport';
import session    from 'koa-session';

/**
 * Return a koa app with authentication routes for the given userStorage and passport strategies.
 *
 * @param {UserStorage} userStorage
 * @param {Array<PassportStrategy>} passports
 * @return {Koa}
 */
function konfederation(userStorage, passports=[], sess) {
  var app    = new Koa();
  var router = new Router();

  /**
   * Login POST request handler for local strategy
   *
   * @param {Function} next
   * @return {Promise}
   */
  async function login(ctx, next) {
    next();
  }

  /**
   * Logout GET request for all strategies
   *
   * @param {Function} next
   * @return {Promise}
   */
  async function logout(ctx, next) {
    next();
  }

  /**
   * Forgot Password POST request for local strategy
   *
   * @param {Function} next
   * @return {Promise}
   */
  async function forgotPassword(ctx, next) {
    next();
  }

  /**
   * Register POST request for local strategy
   *
   * @param {Function} next
   * @return {Promise}
   */
  async function register(ctx, next) {
    next();
  }

  var routes = [
    ['post', '/login'],            // local
    ['get',  '/logout'],           // all
    ['post', '/forgot-password'],  // local
    ['post', '/register']          // local
  ];

  routes.forEach((r, i) => {
    let method = r[0];
    let fn     = r[1];
    router[method](fn);
  });

  if (!sess) {
    sess = session({}, app);
  }

  passports.forEach((p, i) => {

  });

  app
    .use(bodyParser)
    .use(session)
    .use(passport.initialize())
    .use(passport.session())
    .use(convert(router.routes()))
    .use(convert(router.allowedMethods()));
  return app;
}

module.exports = konfederation;
