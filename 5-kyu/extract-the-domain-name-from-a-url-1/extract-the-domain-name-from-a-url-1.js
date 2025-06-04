function domainName(url){
  const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\.\/]+)\./i)
  return match ? match[1] : null
}