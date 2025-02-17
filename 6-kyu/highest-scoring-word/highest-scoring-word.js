function high(x){
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
  const obj = {}
  let result = ""
  x = x.split(' ')
 
  for (const word of x){
    let score = 0
    let letters = word.split("")
    letters.map((letter)=>  score += alphabets.indexOf(letter) + 1)
    
    obj[word] = score 
  }
​
  const sorted = Object.entries(obj).sort((a, b)=> b[1] - a[1])
  return  sorted[0][0]
 
}