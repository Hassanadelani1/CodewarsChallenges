 
function colourful(number) {
  const map = new map()
  for(let i = 0; i < number.length -1; i++){
    let pairs = [number[i], number[i + 1]] 
    let multiplication = number[i] * number[i + 1]
    map.set(pairs, multiplication) 
  }
  return map
//   return true || false ;
}