## https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
## DESCRIPTION
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


## SOLUTION
```
function count(string) {
  // TODO
  const result = {}
  for(const letter of string){
    if(letter === "") return {}
    if(!result[letter]){
      result[letter] = 0
    }
      result[letter] += 1
    
  }
  return result;
}
```
