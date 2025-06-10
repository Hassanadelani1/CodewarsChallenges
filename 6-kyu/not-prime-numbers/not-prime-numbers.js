function notPrimes(a,b){
  //..
  const result = [];
    for (let num = a; num < b; num++) {
        if (hasPrimeDigits(num) && !isPrime(num)) {
            result.push(num);
        }
    }
    return result;
}
​
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
​
function hasPrimeDigits(num) {
    const primeDigits = new Set(['2', '3', '5', '7']);
    const numStr = String(num);
    for (let i = 0; i < numStr.length; i++) {
        if (!primeDigits.has(numStr[i])) {
            return false;
        }
    }
    return true;
}