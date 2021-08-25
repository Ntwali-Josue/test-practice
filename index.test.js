const stringLength =  require('./index');

test('test string length', () => {
  expect(stringLength('testing')).toBe(7);
});
