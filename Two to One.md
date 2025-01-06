## https://www.codewars.com/kata/5656b6906de340bd1b0000ac
## Description:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

## SOLUTION
```
function longest(s1, s2) {
  // your code
  let string = s1.concat(s2);
  let arr = Array.from(string).sort()
  let unique = Array.from(new Set(arr))
  return unique.join("")
  
}
//first, concat the two strings
//then sort the string and remove duplicates
```
