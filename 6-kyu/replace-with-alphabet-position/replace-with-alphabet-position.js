function alphabetPosition(text) {
  text = text.toLowerCase()
  let result = []
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'
  const isLetter = /[a-z][A-Z]/g
  for(const letter of text){
      let currentLetter = letter.toLowerCase()
      let position = alphabets.indexOf(currentLetter)
      if(position !==  -1){
        result.push(position + 1)
      }
    
  }
  return result.join(" ")
}