function isAValidMessage(message){
  // your code
  let parts = message.match(/\d+|[a-zA-Z]+/g); //["3", "hey", "5", "hello", "2", "hi"]
  if(message.length == 0) return true
  if(!parts) return false
  for(let i = 0; i < parts.length; i+=2){
    let count = parseInt(parts[i], 10)
    let word = parts[i + 1]
    if(!word || word.length !== count){
      return false
    }
  }
  return true
}