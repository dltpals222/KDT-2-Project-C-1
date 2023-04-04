const {tagMakeCall} = require('../modules/tagMakeCall.js')
const classPost = require('./classPost.js')

const root = document.getElementById('root')

tagMakeCall(root, 'ul',function(element){
  element.innerHTML = "ul태그 만들기"
})