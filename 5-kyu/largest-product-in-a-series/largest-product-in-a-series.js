function greatestProduct(input) {
  // todo
  const map = new Map()
  for(let i = 0; i < input.length - 4; i++){
    let product = input[i] * input[i + 1] * input[i + 2] * input[i + 3] * input[i + 4]
    let number = [input[i], input[i + 1], input[i + 2] ,input[i + 3] , input[i + 4]] 
      map.set(number, product)
  }
  return Math.max(...map.values())
}