const { JSDOM } = require('jsdom');
const jquery = require('jquery');
const main = require('../main');

const { window } = new JSDOM('<!doctype html><html><body><ul class="cart"></ul></body></html>');
global.$ = jquery(window);

test('addItemToCart adds an item to the cart', () => {
  main.addItemToCart('Test item'); // Use main instead of app
  expect($('.cart').children().length).toBe(1);
  expect($('.cart').children().first().text()).toBe('Test item');
});