import test from 'ava';
import koa from 'koa';
import convert from 'koa-convert';
import mount from 'koa-mount';
var konfederation = require('../src/index.js');

test('this should exist', t => {
  t.is(true, true);
});

test('routes can be added', t => {
  let app = new koa();
  let auth = konfederation({}, []);
  app.use(convert(mount('/auth', auth)));
});
