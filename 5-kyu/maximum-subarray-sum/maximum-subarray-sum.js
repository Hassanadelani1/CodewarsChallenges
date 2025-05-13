var maxSequence = function(arr){
    const map = new Map()
    for(let i = 0; i < arr.length - 1; i++){
        let sum = arr[i] + arr[i + 1]
        map.set([arr[i], arr[i + 1]], sum)
    }
    let sums = []
    let entries =  map.entries()
    for(let arr of entries){
        sums.push(arr[1])
    }
    let highestSum = Math.max(...sums)
    
    entries =  map.entries()
    let result = []
    for(let arr of entries){
        if(arr[1] === highestSum){
            result.push(arr[0])
        }
    }
    return result.flat().reduce((total, num)=> total + num, 0)
}