function mineLocation(field){
  let answer = []
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] === 1) {
            answer.push(i, j)
        }
    }
    return answer
}
    
}
​
//problem: look for the number 1 in the 2D array
//return an array of two element
//the first element is the row index(the index of the array that where 1 is found)
//the second element is 