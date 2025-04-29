function expandedForm(num) {
  // Your code here
  let parts = []
  let numString = String(num)
  for(let i = 0; i < numString.length; i++){
    let elem = numString[i]
    if(elem !== "0"){
      let position = numString.length - 1 - i//position of the digit from right
      let placeValue = Math.pow(10, position)
      parts.push(+elem * placeValue)
    }
  }
  return parts.join(" + ")
}
​
​