function validatePIN (pin) {
  //return true or false
  const reg = /^\d{4}(\d{2})?$/
  return reg.test(pin)
​
}