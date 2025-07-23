function nine() {
  return 9
}
​
function plus(fnc) {
  return function(x){
    return x + fnc()
  }
}
function minus(fnc) {
  return function(x){
    return x - fnc()
  }
}
function times(fnc) {
  return function(x){
    return x * fnc()
  }
}
function dividedBy(fnc) {
  return function(x){
    return Math.floor(x / fnc())
  }
}