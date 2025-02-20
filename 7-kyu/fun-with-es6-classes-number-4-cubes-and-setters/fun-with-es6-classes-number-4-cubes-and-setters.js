// Go ahead and define your class :)
class Cube{
  constructor(length){
    this.length = length
  }
  get surfaceArea(){
    return 6 * (this.length * this.length)
  }
  set surfaceArea(surfaceArea){
    this.length = Math.sqrt(surfaceArea / 6)
     return 6 * (this.length ** 2)
  }
  get volume(){
    return this.length ** 3
  }
  set volume(volume){
    this.length = Math.cbrt(volume)
  }
}