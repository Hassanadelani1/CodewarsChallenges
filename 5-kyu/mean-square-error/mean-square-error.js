const solution = function(firstArray, secondArray) {
  let squaredDiff = firstArray.map((elem, index)=> Math.abs(elem - secondArray[index]) ** 2)
  let sum = squaredDiff.reduce((total, num)=> total + num,0)
  let average = sum / firstArray.length
  return average
}