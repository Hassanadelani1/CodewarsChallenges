# https://www.codewars.com/kata/57f609022f4d534f05000024
## DESCRIPTION
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

```
function stray(numbers) {
//   return new Set(numbers);
//   return 0;
  let result;
  let obj = {}
  for(let i = 0; i < numbers.length; i++){
    let char = numbers[i]
    if(!obj[char]){
      obj[char] = 0
    }
    obj[char]++
  }
  
  for(let [key, value] of Object.entries(obj)){
    if(value === 1){
      result = key
    }
  }
  return Number(result)
 }
```
