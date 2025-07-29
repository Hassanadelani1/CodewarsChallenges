 
function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  return 0.5 * numberOfSides * circleRadius ** 2 * Math.sin((2 * Math.PI) / numberOfSides);
}
​
​
​