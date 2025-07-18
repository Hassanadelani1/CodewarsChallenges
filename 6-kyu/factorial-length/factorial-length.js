 
function count(n) {
//..
  let factorial = 1
  for(let i = 1; i <= n; i++){
    factorial *= i
  }
  return String(factorial).length
  
};
​
//first get the factorial
//then count the digits of the result