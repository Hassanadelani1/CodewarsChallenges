function getDivisorsCnt(n){
    // todo
  const divisors = []
  for(let i = 1; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      if(i == n/i){
        divisors.push(i)
      }else{
        divisors.push(i, n / i)
      }
​
    }
  }
  return divisors.length
}
​