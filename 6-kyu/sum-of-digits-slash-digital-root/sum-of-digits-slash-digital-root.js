function digitalRoot(n) {
  if(n < 10) return n
  
  return digitalRoot(n.toString().split("").map(Number).reduce((sum, current)=> sum + current, 0))
//   return n === 0? 0 : 1 + (n - 1) % 9;
}