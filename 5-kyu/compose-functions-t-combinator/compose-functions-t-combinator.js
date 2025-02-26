var compose = function(number, ...functions) {
  if(functions.length === 0) return number
  return functions.reduce((result, func)=> func(result) , number)
  
}