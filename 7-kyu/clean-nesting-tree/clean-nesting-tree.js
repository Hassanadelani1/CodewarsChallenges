 
function isCleanlyNested(xs) {
//   return true || false ;
  return xs.every((arr)=> Array.isArray(arr) || !Array.isArray(arr))
}