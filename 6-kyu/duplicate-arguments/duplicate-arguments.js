function solution(...args){
 // return true if this method is called with duplicate argument values
  return [...new Set(args)].length !== args.length
​
}