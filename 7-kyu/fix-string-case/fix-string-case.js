function solve(s){
    //..
  let upper = [];
  let lower = [];
  let arr = s.split('');
    arr.filter((el) => {
    if (el == el.toUpperCase()) {
        upper.push(el);
    } else {
            lower.push(el);
        }
});
    return upper.length > lower.length ? s.toUpperCase() : s.toLowerCase();
  
  
 }
 
  
​