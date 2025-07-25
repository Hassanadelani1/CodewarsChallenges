 
function getAngle(t) {
  // your code here
    let parts = t.trim().split(":")
    if(parts.length !== 2) return "Invalid input"
  
    const [hoursString, minutesString] = parts
    let hour = parseInt(hoursString, 10)
    let minutes = parseInt(minutesString, 10)
  
    let isValidHourAndMinute = (hour >= hour < 24) && (minutes >= 0 && minutes <= 59)
  
    if(!/^\d+$/.test(hoursString) || !/^\d+$/.test(minutesString) || !isValidHourAndMinute) return "Invalid input"
    
    return Math.abs((30 * hour) - (5.5 * minutes))
  
   
  
  
  
  
}
​
//θ=∣30h−5.5m∣