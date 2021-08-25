
const stringLength = (string) => {

  if (string.length < 1 || string.length > 10){
    return 'Too long'
  }
  return string.length
}

const reverseString = (string) => {
  return string.split('').reverse().join('')
}

// console.log(reverseString('testing'));

module.exports = {
  stringLength, reverseString
};