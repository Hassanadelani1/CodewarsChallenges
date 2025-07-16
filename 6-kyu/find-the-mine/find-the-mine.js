 
function mineLocation(field){
  let answer = []
  for(let i = 0; i < field.length; i++){
    for(let j = 0; j < field[i].length; j++){
        if(field[i][j] === 1) {
            return [i, j]
        }
    }
}   
}
​
//problem: look for the number 1 in the 2D array
//return an array of two element
//the first element is the row index(the index of the array that where 1 is found)
//the second element is 