 
function replace(s) {
  //coding and coding....
  let vowels = ["a", "e", "i", "o", "u"]
  return s.split("").map((letter)=> {
    if(vowels.includes(letter.toLowerCase())){
      letter = "!"
    }
  })
}