const root = document.getElementById('root')
// root.textContent = "아무거나 root"

function tagMaker(tag,parent,id,callback){
  const element = document.createElement(tag)
  element.id = id
  parent.appendChild(element)
  if(callback){
    callback(element);
  }
  return element
}
function layoutEditor(wid,hei,ele){
  const a = ele.style
  a.width = wid
  
  
  console.log(a)

  
}

const boardDiv = tagMaker("div",root,"boardDiv")
boardDiv.textContent = 'asdfa'
layoutEditor("500","500",boardDiv)