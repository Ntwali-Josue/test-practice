const { test, expect } = require('@jest/globals');
const {stringLength, reverseString } =  require('./index');

test('test string length', () => {
  expect(stringLength('testing')).toBe(7);
});

test('test if characters are between 1 & 10', () => {
  expect(stringLength('instructions')).toBe('Too long')
})

test('Reverse string', () => {
  expect(reverseString('testing')).toBe('gnitset')
})