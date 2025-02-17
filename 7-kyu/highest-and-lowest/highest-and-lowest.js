function highAndLow(numbers){
  // ...
  let splitted = numbers.split(" ")
  let nums = splitted.map((elem)=> +elem)
  const max = [Math.max(...nums)]
  const min = [Math.min(...nums)]
return [...max, ... min].join(" ")
}