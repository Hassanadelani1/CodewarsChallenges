function capMe(names) {
  return names.map((name)=> name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase())
}