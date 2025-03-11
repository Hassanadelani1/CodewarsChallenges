function longestCollatz (inputArray) {
  // Your code here
  let answer = 0
  const obj = {}
  function countSequence(n){
    let count = 0
    while(n > 2){
      if(n % 2 === 0){
      n = n / 2
    }else{
      n = 3 * n + 1
    }
    count++
    }
    return count
  }
  
 let result = inputArray.map((elem)=> countSequence(elem))
 
 let max = Math.max(...result)
 
 inputArray.map((elem, index)=> obj[elem] = result[index])
  
  for(const [key, value] of Object.entries(obj)){
      if(value === max){
          answer = key
      }
  }
  return Number(answer)
}