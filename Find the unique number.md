# https://www.codewars.com/kata/585d7d5adb20cf33cb000235
## Description:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique


## SOLUTION
```
function findUniq(arr) {
  // do magic
let result = null
  let obj = {}
  for(let i = 0; i < arr.length; i++){
    let char = arr[i];
    if(!obj[char]){
      obj[char] = 0
    }
    obj[char]++
  }
  for(let [key, value] of Object.entries(obj)){
    if(value == 1){
      result = key
    }
  }
  return Number(result)
}
```
