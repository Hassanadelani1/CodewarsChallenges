function* multiplicationGenerator(a) {
  for(let b = 1; b <= 10; b++){
    yield `${a} x ${b} = ${a * b}`
  }
}
​
function* generator(a, b) {
  for(let i = a; i <= b; i++){
    yield multiplicationGenerator(i)
  }
}