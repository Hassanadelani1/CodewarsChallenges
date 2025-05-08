function alphabetPosition(text) {
  let result = []
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'
  for(const letter of text){
      let currentLetter = letter.toLowerCase()
      let position = alphabets.indexOf(currentLetter)
      if(position !==  -1){
        result.push(position + 1)
      }
    
  }
  return result.join(" ")
}