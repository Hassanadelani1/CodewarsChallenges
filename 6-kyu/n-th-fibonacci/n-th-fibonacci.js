 
function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  let fib = [0, 1]
  if(n == 1) return 1
  if(n == 2) return 1
  for(let i = 2; i <= n; i++){
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}
//loop through the fib starting from the 2 n number of times
//for each iteration, populate the fib with the current fib value 
//then return the last fib element