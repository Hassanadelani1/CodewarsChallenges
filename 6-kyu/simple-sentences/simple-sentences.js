function makeSentence(parts) {
  let sentence = "";
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
​
    if (part === ",") {
      sentence = sentence.trimEnd() + ",";
      if (i + 1 < parts.length && parts[i + 1] !== "." && parts[i + 1] !== ",") {
        sentence += " ";
      }
    } else if (part === ".") {
      continue;
    } else {
      if (sentence && sentence[sentence.length - 1] !== " " && sentence[sentence.length - 1] !== ",") {
        sentence += " ";
      }
      sentence += part;
    }
  }
​
  sentence = sentence.replace(/\.+$/, "").trimEnd() + ".";
​
  return sentence;
}
​