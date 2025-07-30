function alphanumeric(string){
  //your code here
  let regExp = /^[A-Za-z0-9]+$/
  return regExp.test(string)
}