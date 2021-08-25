
const stringLength = (string) => {

  if (string.length < 1 || string.length > 10){
    return 'Too long'
  }
  return string.length
}

module.exports = stringLength;