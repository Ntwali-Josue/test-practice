const stringLength =  require('./index');

test('test string length', () => {
  expect(stringLength('testing')).toBe(7);
});

test('test if characters are between 0 & 10', () => {
  expect(stringLength('instructions')).toBe('Too long')
})