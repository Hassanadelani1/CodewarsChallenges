##  Description:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

### Examples
```
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
```
### SOLUTION
```function removeUrlAnchor(url){
  // TODO: complete
  let result = []
  let link = url.split("")
  for(let i = 0; i < link.length; i++){
    if(link[i] === "#"){
      link.splice(i,link.length - i)
    }
  }
  return link.join("")
  
}
```
