import test from 'ava';
import koa from 'koa';
import mount from 'koa-mount';
var konfederation = require('../dist/index.js');

test('this should exist', t => {
  t.is(true, true);
});

test('routes can be added', t => {
  let app = koa();
  let auth = konfederation({}, []);
  app.use(mount('/auth', auth));
});
