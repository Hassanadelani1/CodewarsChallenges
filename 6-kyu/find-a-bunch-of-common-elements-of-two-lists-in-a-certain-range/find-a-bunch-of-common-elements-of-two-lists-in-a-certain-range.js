function findArr(arrA, arrB, rng, wanted) {
  // your code here
 const [low, high] = rng
 
 function countOccurence(arr){
    let counts = {}
    for(const elem of arr){
        if(!counts[elem]){
            counts[elem] = 0
        }
        counts[elem]++
    }
    return counts
}
 let countsA = countOccurence(arrA)
 let countsB = countOccurence(arrB)
 
 let setB = new Set(arrB)
 
 let seen = new Set()
 let occurMoreThanOnce = []
 
 for(const elem of arrA){
   if(!seen.has(elem) && setB.has(elem) && countsA[elem] > 1 &&  countsB[elem] > 1){
     seen.add(elem)
     occurMoreThanOnce.push(elem)
   }
 }
  return occurMoreThanOnce
    .filter(elem=> elem >= low && elem <= high)
    .filter(elem=> wanted === "odd" ? elem % 2 !== 0 : elem % 2 === 0)
    .sort((a, b)=> a - b)
}