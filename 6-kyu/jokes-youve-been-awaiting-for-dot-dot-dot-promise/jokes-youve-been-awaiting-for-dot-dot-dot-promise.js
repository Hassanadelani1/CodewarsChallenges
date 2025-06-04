async function sayJoke(apiUrl, jokeId){
  // use mocked `fetch(url)`
  try{
    const response = await fetch(apiUrl)
    const data = await response.json()
    if(!data){
      throw new Error(`No Jokes at url: ${apiUrl}`)
    }
    
    const joke = data.find(j=> j.id === jokeId)
    if(!joke) throw new Error(`No jokes found id: ${jokeId}`)
    
    return {
      saySetup: ()=> joke.setup,
      sayPuncLine: ()=> joke.sayPunchLine
    }
  }catch(error){
    throw error
  }
  
}