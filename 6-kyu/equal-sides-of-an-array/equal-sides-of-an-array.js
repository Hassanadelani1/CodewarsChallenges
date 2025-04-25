function findEvenIndex(arr)
{
  //Code goes here!
  const sum = arr.reduce((acc, current)=> acc + current ,0)
  let leftSum = 0
  for(let i = 0; i < arr.length; i++){
    let rightSum = sum - leftSum - arr[i]
    if(rightSum === leftSum) return i
    leftSum += arr[i]
  }
  return -1
}