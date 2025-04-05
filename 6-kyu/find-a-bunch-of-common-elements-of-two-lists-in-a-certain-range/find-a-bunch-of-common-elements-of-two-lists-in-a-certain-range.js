function findArr(arrA, arrB, rng, wanted) {
  const [low, high] = rng;
​
  // Build Sets for faster lookup
  const setB = new Set(arrB);
​
  // Count occurrences
  function countOccurence(arr) {
    const counts = {};
    for (const elem of arr) {
      counts[elem] = (counts[elem] || 0) + 1;
    }
    return counts;
  }
​
  const countsA = countOccurence(arrA);
  const countsB = countOccurence(arrB);
​
  // Find common elements that occur at least twice
  const occurTwiceOrMore = [];
  const seen = new Set();
  
  for (const elem of arrA) {
    if (!seen.has(elem) && setB.has(elem) && countsA[elem] >= 2 && countsB[elem] >= 2) {
      seen.add(elem);
      occurTwiceOrMore.push(elem);
    }
  }
​
  // Apply range and parity filter
  const result = occurTwiceOrMore
    .filter(elem => elem >= low && elem <= high)
    .filter(elem => wanted === "odd" ? elem % 2 !== 0 : elem % 2 === 0)
    .sort((a, b) => a - b);
​
  return result;
}
​