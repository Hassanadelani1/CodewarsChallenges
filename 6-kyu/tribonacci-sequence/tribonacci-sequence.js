function tribonacci(signature,n){
  //your code here
  if(n == 0) return []
  if(n < 3) return signature.slice(0, n)
  let result = signature.slice()
  for(let i = 3; i < n; i++){
    result[i] = result[i - 1] + result[i - 2] + result[i - 3]
  } 
  return result
}