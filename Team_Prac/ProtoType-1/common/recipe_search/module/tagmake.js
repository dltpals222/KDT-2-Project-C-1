function tagMake(parent, tagName, callback){
  const element = document.createElement(tagName)
  if(callback){
    callback(element)
  }
  parent.appendChild(element)
  return element
}

export default tagMake