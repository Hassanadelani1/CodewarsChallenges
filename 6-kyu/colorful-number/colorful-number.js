function colourful(number) {
  number = String(number)
  const arr = [...number]
  for(let i = 0; i < number.length - 1; i++){
    let multiplication = number[i] * number[i + 1]
    arr.push(multiplication)
  }
  let allProduct = String(number).split("").reduce((acc, current)=> acc * current,1)
    arr.push(allProduct)
    let products = arr.map(elem=> Number(elem))
    let uniqueProducts = new Set(products)
    return uniqueProducts.size === products.length
}