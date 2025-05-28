function accum(s) {
  let result = []
  for(let i = 0; i < s.length; i++){
    let acc = s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
    result.push(acc)
  }
  return result.join("-")
}