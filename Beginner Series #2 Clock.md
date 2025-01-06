# https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
## Description:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

## SOLUTION
```
function past(h, m, s){
  //#Happy Coding! ^_^
  return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)
}
```
