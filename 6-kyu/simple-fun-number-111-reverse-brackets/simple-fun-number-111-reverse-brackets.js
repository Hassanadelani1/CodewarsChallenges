function reverseParentheses(s) {
const reg = /\(([^()]*)\)/g;
while(s.includes("(")){
  s = s.replace(reg, (match, group)=> group.split("").reverse().join(""))
}
  return s
//   return s.match(reg)
  
}