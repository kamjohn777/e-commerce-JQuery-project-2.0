const { JSDOM } = require('jsdom');
const jquery = require('jquery');
const main = require('../JavaScript/main');

const { window } = new JSDOM('<!doctype html><html><body><ul class="cart"></ul></body></html>');
global.$ = jquery(window);

test('addItemToCart adds an item to the cart', () => {
  app.addItemToCart('Test item');
  expect($('.cart').children().length).toBe(1);
  expect($('.cart').children().first().text()).toBe('Test item');
});