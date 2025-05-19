function diamond(n){
  if (n % 2 === 0  || n <= 0)return null
  let diamond = "";
  for (let i = 1; i <= n; i += 2) {
    let spaces = " ".repeat((n - i) / 2);
    let stars = "*".repeat(i);
    diamond += spaces + stars + "\n";
  }
  for (let i = n - 2; i >= 1; i -= 2) {
    let spaces = " ".repeat((n - i) / 2);
    let stars = "*".repeat(i);
    diamond += spaces + stars + "\n";
  }
  return diamond;
}
//make a for loop n times
//for each loop 