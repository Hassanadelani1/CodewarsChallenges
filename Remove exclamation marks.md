# https://www.codewars.com/kata/57a0885cbb9944e24c00008e
## Description:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

## SOLUTION
```
function removeExclamationMarks(s) {
  let regEx = /!/g
  
  return s.replace(regEx, "");
}
```
