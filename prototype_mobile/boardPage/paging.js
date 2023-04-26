import all_mighty_editor from '../module/all_mighty_editor.js'

const {multiAndSingleTagMaker,PositionEditor,fontAndLayoutEditor,kingGodFlexEditor,allMightyStyleEditor} = all_mighty_editor

const root = document.getElementById('root')
const GClength = 5
const ids = {
  mainList : ["", 'div','board-list'],
  mainPage : ["", 'div','number-list-wrap'],
  mainListChild : ["", 'div',"",5],
  mainPageChild : {
    first : ["", 'div','page-down'],
    second : ["", 'div','current-page'],
    third : ["", 'div','page-up'],
  },
  mainPageGrandChild : {
    first : [["",'div',"start-number",1,element => {
      element.innerText = '<<맨앞'
    }],["",'div',"before-number",1,element => {
      element.innerText = '<이전'
    }]],
    second : ["", 'div',"",1],
    third : [["", 'div','next-number',1,element => {
      element.innerText = '다음>'
    }],["", 'div','end-number',1,element => {
      element.innerText = '맨뒤>>'
    }]]
  }
}


const boardList = multiAndSingleTagMaker(root,ids.mainList[1],ids.mainList[2])
const numberListWrap = multiAndSingleTagMaker(root,ids.mainPage[1],ids.mainPage[2])
multiAndSingleTagMaker(boardList,ids.mainListChild[1],ids.mainListChild[2])
const pageDown = multiAndSingleTagMaker(numberListWrap,ids.mainPageChild.first[1],ids.mainPageChild.first[2])
const currentPage = multiAndSingleTagMaker(numberListWrap,ids.mainPageChild.second[1],ids.mainPageChild.second[2])
const pageUp = multiAndSingleTagMaker(numberListWrap,ids.mainPageChild.third[1],ids.mainPageChild.third[2])

const startNumber = multiAndSingleTagMaker(pageDown,ids.mainPageGrandChild.first[0][1],ids.mainPageGrandChild.first[0][2],ids.mainPageGrandChild.first[0][3],ids.mainPageGrandChild.first[0][4])
const beforeNumber = multiAndSingleTagMaker(pageDown,ids.mainPageGrandChild.first[1][1],ids.mainPageGrandChild.first[1][2],ids.mainPageGrandChild.first[1][3],ids.mainPageGrandChild.first[1][4])
for(let i =0; i< GClength;i++){
  multiAndSingleTagMaker(currentPage,ids.mainPageGrandChild.second[1],ids.mainPageGrandChild.second[2],ids.mainPageGrandChild.second[3],element => {element.setAttribute('id',`number-${i+1}`), element.innerText = i+1})
}
const nextNumber = multiAndSingleTagMaker(pageUp,ids.mainPageGrandChild.third[0][1],ids.mainPageGrandChild.third[0][2],ids.mainPageGrandChild.third[0][3],ids.mainPageGrandChild.third[0][4])
const endNumber = multiAndSingleTagMaker(pageUp,ids.mainPageGrandChild.third[1][1],ids.mainPageGrandChild.third[1][2],ids.mainPageGrandChild.third[1][3],ids.mainPageGrandChild.third[1][4])

kingGodFlexEditor(root,'row','center','center')
for(let i = 0;i<root.children.length;i++){
  kingGodFlexEditor(root.children[i],'','center','center')
}
for(let i = 0;i<numberListWrap.children.length;i++){
  kingGodFlexEditor(numberListWrap.children[i],'','center','center')
}
fontAndLayoutEditor(numberListWrap,'80vw','3vh','1')
fontAndLayoutEditor(numberListWrap,'80vw','3vh','1')