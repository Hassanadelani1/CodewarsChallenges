function getConsectiveItems(items, key){
  const str = String(items);
  const regex = new RegExp(`${key}+`, "g");
  const matches = str.match(regex);
​
  if (!matches) return 0;
  return Math.max(...matches.map(m => m.length));
}