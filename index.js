
const stringLength = (string) => {

  if (string.length < 1 || string.length > 10){
    return 'Too long'
  }
  return string.length
}

const reverseString = (string) => {
  return string.split('').reverse().join('')
}

class Calculator {
  static add(num1, num2) {
    const sum = num1 + num2
    return sum;
  }
  static substract(num1, num2) {
    const substract = num1 - num2
    return substract;
  }
  static divide(num1, num2) {
    const divide = num1 / num2;
    return divide
  }
  static multiply(num1,num2) {
    const multiply = num1 * num2;
    return multiply;
  }
}

// console.log(Calculator.add(1,2))

module.exports = {
  stringLength, 
  reverseString, 
  Calculator
};