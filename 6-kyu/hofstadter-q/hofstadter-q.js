 
function hofstadterQ(n) {
  if(n === 1 || n === 2) return 1
  return hofstadterQ(n - hofstadterQ(n - 1)) +  hofstadterQ(n - hofstadterQ(n - 2))
}