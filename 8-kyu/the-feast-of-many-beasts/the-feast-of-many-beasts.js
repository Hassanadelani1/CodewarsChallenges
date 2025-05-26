function feast(beast, dish) {
//your function here\
  let firstLetter = beast[0]
  let lastLetter = beast[beast.length - 1]
  return firstLetter == dish[0] && lastLetter == dish[dish.length - 1]
}