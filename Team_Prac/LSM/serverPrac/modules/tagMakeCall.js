export default function tagMakeCall (parentName, tagName, callback) {
  let element = document.createElement(tagName);
  parentName.appendChild(element);
  if(callback){
    callback(element);
  }
  return element;
}