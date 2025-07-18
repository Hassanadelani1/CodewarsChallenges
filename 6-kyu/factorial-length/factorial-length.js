function count(n) {
//..
  if(n === 0 || n === 1) return 1
  let factorial = 1
  for(let i = 1; i <= n; i++){
    factorial *= i
  }
  return factorial.toString().length
  
};
​
//first get the factorial
//then count the digits of the result