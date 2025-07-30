function hofstadterQ(n) {
  if(n === 1 || n === 2) return 1
  return hofstadterQ(n - Hofstadter sequences(n - 1)) +  hofstadterQ(n - Hofstadter sequences(n - 2)) 
}