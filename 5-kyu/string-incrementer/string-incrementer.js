function incrementString (string) { 
    let numMatch = string.match(/\d*$/)[0]
    let letters = string.slice(0, string.length - numMatch.length)
    if(!numMatch){
      return string + "1"
    }else{
      let increasedNum = (parseInt(numMatch, 10) + 1).toString().padStart(numMatch.length, "0")
      return letters + increasedNum
    }
}
​