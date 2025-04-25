 
function isPrime(number) {
  // ...
  if(number <= 1) return false
  for(let i = 2 ; i <= Math.sqrt(number); i++){
    if(number % i === 0) return false
  }
  return true
}
​
function getPrimes(start, finish) {
  // ...
  let result = []
  for(let i = start; i <= finish; i++){
    if(isPrime(i)) result.push(i)
  }
  return result
}