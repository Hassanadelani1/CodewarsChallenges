var capitals = function (word) {
  const indexes = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
      indexes.push(i);
    }
  }
  return indexes;
};