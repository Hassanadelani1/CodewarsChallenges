 
function titleCase(title, minorWords) {
  minorWords = minorWords ? minorWords.toLowerCase().split(" ") : []
  
  return title
    .toLowerCase()
    .split(" ")
    .map((word, index)=>{
      if(index === 0 || !minorWords.includes(word)){
        return word.charAt(0).toUpperCase() + word.slice(1)
      }else if(minorWords.includes(word)){
        return word.toLowerCase()
      }else{
        return word.toUpperCase()
      }
  }).join(" ")
}
​
​