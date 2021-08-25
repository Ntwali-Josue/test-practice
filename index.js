
const stringLength = (string) => {

  if (string.length < 0 || string.length > 10){
    return 'Too long'
  }
  return string.length
}

module.exports = stringLength;