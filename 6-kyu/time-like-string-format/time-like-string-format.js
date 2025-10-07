function solution(hour) {
  if (isNaN(hour) || typeof hour !== "number") {
    throw new Error("hour must be a number");
  }
​
  hour = hour.toString();
​
  if (hour.length < 3 || hour.length > 4) {
    throw new Error("Invalid time format");
  }
​
  const hrs = hour.slice(0, -2);
  const mins = hour.slice(-2);
​
  if (isNaN(hrs) || isNaN(mins)) {
    throw new Error("Invalid time format");
  }
​
  return `${parseInt(hrs, 10)}:${mins.padStart(2, "0")}`;
}
​