 
function makeSentence(parts) {
  let sentence = "";
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
​
    if (part === ",") {
      // Attach comma directly to previous word
      sentence = sentence.trimEnd() + ",";
      // Add a space AFTER comma (if next part exists and isn't punctuation)
      if (i + 1 < parts.length && parts[i + 1] !== "." && parts[i + 1] !== ",") {
        sentence += " ";
      }
    } else if (part === ".") {
      // Skip all periods in the middle; we will add only one at the end
      continue;
    } else {
      // Add space if not starting and not after comma (already added space after comma)
      if (sentence && sentence[sentence.length - 1] !== " " && sentence[sentence.length - 1] !== ",") {
        sentence += " ";
      }
      sentence += part;
    }
  }
​
  // Remove existing periods and trim, then add exactly one period
  sentence = sentence.replace(/\.+$/, "").trimEnd() + ".";
​
  return sentence;
}
​