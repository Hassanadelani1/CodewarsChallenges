# https://www.codewars.com/kata/546e2562b03326a88e000020
## SOLUTION
```
function squareDigits(num){
  let string = new String(num)
  let numbers = string.split("")
  return Number(numbers.map(num=>  Number(num) ** 2 ).join(""))
};
```
