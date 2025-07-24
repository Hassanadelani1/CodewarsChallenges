function solution (roman) {
  // complete the solution by transforming the 
  // string roman numeral into an integer
  let numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  let result = 0
  for(let i = 0; i < roman.length; i++){
    let current = numerals[roman[i]]
    let next = numerals[roman[i + 1]]
    
    if(current < next){
      result -= current
    }else{
      result += current
    }
  }
  return result
    
}
​