 
function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  if(n == 1) return 0
  if(n == 2) return 1
  let signature = [0, 1]
  for(let i = 2; i <= n; i++){
    signature[i] = signature[i] + signature[i -1]
  }
  return signature[signature.length - 1]
}