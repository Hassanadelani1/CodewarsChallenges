function accum(s) {
  let result = []
  for(let i = 1; i <= s.length; i++){
    result.push(s[i].toUpperCase() + s[i].repeat(i))
  }
  return result.join("-")
}