function firstNonRepeatingLetter(s) {
  // Add your code here
  const counts = {}
  const lowerS = s.toLowerCase()
  
  for(let char of lowerS){
    counts[char] = (counts[char] || 0) + 1
  }
  
  for(let i = 0; i < s.length; i++){
    if(counts[lowerS[i]] === 1){
      return s[i]
    }
  }
  return ""
}