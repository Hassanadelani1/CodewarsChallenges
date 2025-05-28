function accum(s) {
  let result = ""
  for(let i = 0; i < s.length; i++){
    result += s[i].toUpperCase() + s[i].repeat(i)
  }
  return result
}