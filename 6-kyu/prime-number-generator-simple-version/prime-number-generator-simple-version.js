var primeGen = (function*(){  
//   your code goes here
  function isPrime(num){
    if(num < 2)return false
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0) return false
    }
    return true
  }
  
  let num = 2
  while(true){
    if(isPrime(num)) yield num
    num++
  }
​
}());