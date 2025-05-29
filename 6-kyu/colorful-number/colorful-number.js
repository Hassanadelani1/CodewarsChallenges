function colourful(number) {
  const digits = [...String(number)].map(Number);
  const products = new Set();
​
  for (let i = 0; i < digits.length; i++) {
    let product = 1;
    for (let j = i; j < digits.length; j++) {
      product *= digits[j];
      if (products.has(product)) return false;
      products.add(product);
    }
  }
​
  return true;
}
​