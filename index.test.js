const {stringLength, reverseString, Calculator } =  require('./index');

test('test string length', () => {
  expect(stringLength('testing')).toBe(7);
});

test('test if characters are between 1 & 10', () => {
  expect(stringLength('instructions')).toBe('Too long')
})

test('Reverse string', () => {
  expect(reverseString('testing')).toBe('gnitset')
});

describe('Calculator', () => {
  test('add', () => {
    expect(Calculator.add(1,2)).toBe(3)
  });
  
  test('substract', () => {
    expect(Calculator.substract(2,1)).toBe(1)
  });

});
