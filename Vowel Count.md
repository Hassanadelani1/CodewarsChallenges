# https://www.codewars.com/kata/54ff3102c1bad923760001f3
## Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

## SOLUTION
```
function getCount(str) {
  let regEx = /[aeiou]/gi
  if(str.match(regEx) !== null){
    return (str.match(regEx)).length;
  }else{
    return 0
  }
}
```
