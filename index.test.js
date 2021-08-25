const {stringLength, reverseString, Calculator, capitalize } =  require('./index');

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

  test('divide', () => {
    expect(Calculator.divide(4,2)).toBe(2)
  });

  test('multiply', () => {
    expect(Calculator.multiply(1,2)).toBe(2)
  });
});

describe('Capitalize', () => {
  test('capitalize', () => {
    expect(capitalize('test')).toBe('Test');
  });
})
