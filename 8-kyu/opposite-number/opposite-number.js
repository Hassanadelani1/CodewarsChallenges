 
function replace(s) {
  //coding and coding....
  let vowels = /aeiou/gi
  return s.split("").map((letter)=> {
    if(vowels.test(letter)){
      s.replace(letter, "!")
    }
  })
}