function hasSubpattern(string){
  return /^(.+)\1+$/.test(string);
}