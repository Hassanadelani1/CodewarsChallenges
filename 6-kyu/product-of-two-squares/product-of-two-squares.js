function squareProduct(n) {
  let sqrtN = Math.sqrt(n)
  if(!Number.isInteger(sqrtN)){
     return []
     }
  const k = sqrtN
  let result = []
  for(let i = 0; i <= Math.abs(k); i++){
    if(i === 0) continue
    if(k % i === 0){
      let b = k / i
      const sortedPair = [i, b].sort((x, y) => x - y);
      result.push(JSON.stringify(sortedPair))
    }
  }
  return [...new Set(result)].map((str)=>
   JSON.parse(str)
  )
}