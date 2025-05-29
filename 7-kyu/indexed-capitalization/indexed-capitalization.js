 
function capitalize(s,arr){
  return s.split("").map((letter, index)=> {
    letter = arr.includes(index) ? letter.toUpperCase : letter
    return letter
  }).join("")
};