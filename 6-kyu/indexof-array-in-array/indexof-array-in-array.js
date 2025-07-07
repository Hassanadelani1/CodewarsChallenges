var searchArray = function (arrayToSearch, query) {
// TODO your code here
  let isArray = arrayToSearch.every(arr=> Array.isArray(arr))
  let isOflengthTwo = arrayToSearch.every(arr=> arr.length === 2)
  let queryCheck = Array.isArray(query) && query.length === 2
  
  if(!isArray || !isOflengthTwo || !queryCheck){
    throw new Error(-1)
  }
  
  for(let i = 0; i < arrayToSearch.length; i++){↔}
  return -1
}