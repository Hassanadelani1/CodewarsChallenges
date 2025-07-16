function comp(a, b){
  //your code here
  if (!a || !b || a.length !== b.length) return false;
​
  let aSorted = a.map(x => x * x).sort((x, y) => x - y);
  let bSorted = b.sort((x, y) => x - y);
​
  for (let i = 0; i < aSorted.length; i++) {
    if (aSorted[i] !== bSorted[i]) return false;
  }
​
  return true;
}
//order the elements in both arrays in acending order
//then check if the square of the elements in a = to the elements in b 
//then check if their length are equal