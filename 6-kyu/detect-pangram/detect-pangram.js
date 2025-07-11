function isPangram(string){    
  const cleaned = string.toLowerCase().replace(/[^a-z]/g, '');
  const uniqueLetters = new Set(cleaned);
  return uniqueLetters.size === 26;
}