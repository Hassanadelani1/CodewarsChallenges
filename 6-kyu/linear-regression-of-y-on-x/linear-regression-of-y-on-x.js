function regression_line(x,y){
  //your code here
  const result = []
  let summationXSquare = x.reduce((acc,current)=> acc + current ** 2, 0)
  let summationY = y.reduce((acc, current)=> acc + current, 0)
  let summationX = x.reduce((acc, current)=> acc + current, 0)
  let sumOfXY = x.reduce((acc, current, index)=> acc + current * y[index], 0)
  let squaredSumOFX = (x.reduce((acc, current)=> acc + current, 0)) ** 2
  
  
  let a = ((summationXSquare * summationY) - (summationX * sumOfXY)) / ((x.length * summationXSquare) - squaredSumOFX)
  
  
  
  let b = ((x.length * sumOfXY) - (summationX * summationY)) / ((x.length * summationXSquare) - squaredSumOFX)
  
  
  result.push(parseFloat(a.toFixed(4)))
  result.push(parseFloat(b.toFixed(4)))
  return result
  
  }