## https://www.codewars.com/kata/5351b35ebaeb67f9110012d2
## DESCRIPTION
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2

## SOLUTION
```
function createSecretHolder(secret) {
  return { 
    getSecret: function() {return secret}, 
    setSecret: function(v) {secret = v} 
  }; 
}
```
