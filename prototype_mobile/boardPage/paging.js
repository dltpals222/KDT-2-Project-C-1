import all_mighty_editor from '../module/all_mighty_editor.js'

const {multiAndSingleTagMaker,PositionEditor,fontAndLayoutEditor,kingGodFlexEditor,allMightyStyleEditor} = all_mighty_editor

const root = document.getElementById('root')
const GClength = 5
const ids = {
  mainList : ["", 'div','board-list'],
  mainPage : ["", 'div','board-paging'],
  mainListChild : ["", 'div',"",5],
  mainPageChild : {
    first : ["", 'div','page-down'],
    second : ["", 'div','current-page'],
    third : ["", 'div','page-up'],
  },
  mainPageGrandChild : {
    first : [["",'a',{id : 'pd-home'},1,element => {
      element.innerText = '처음'
    }],["",'a',{id : 'pd-prev'},1,element => {
      element.innerText = '이전'
    }]],
    second : ["", 'a',{href : '#'},1],
    third : [["", 'a',{id : 'pu-next'},1,element => {
      element.innerText = '다음'
    }],["", 'a',{id : 'pu-end'},1,element => {
      element.innerText = '마지막'
    }]]
  }
}

const numberStyle = ['15px','10px',"1"]
const tagASet={href : '#'}


const boardList = multiAndSingleTagMaker(root,ids.mainList[1],ids.mainList[2])
const boardPaging = multiAndSingleTagMaker(root,ids.mainPage[1],ids.mainPage[2])
multiAndSingleTagMaker(boardList,ids.mainListChild[1],ids.mainListChild[2],ids.mainListChild[3])
const pageDown = multiAndSingleTagMaker(boardPaging,ids.mainPageChild.first[1],ids.mainPageChild.first[2])
const currentPage = multiAndSingleTagMaker(boardPaging,ids.mainPageChild.second[1],ids.mainPageChild.second[2])
const pageUp = multiAndSingleTagMaker(boardPaging,ids.mainPageChild.third[1],ids.mainPageChild.third[2])

const pdHome = multiAndSingleTagMaker(pageDown,ids.mainPageGrandChild.first[0][1],ids.mainPageGrandChild.first[0][2],ids.mainPageGrandChild.first[0][3],ids.mainPageGrandChild.first[0][4])
const pdPrev = multiAndSingleTagMaker(pageDown,ids.mainPageGrandChild.first[1][1],ids.mainPageGrandChild.first[1][2],ids.mainPageGrandChild.first[1][3],ids.mainPageGrandChild.first[1][4])
for(let i =0; i< GClength;i++){
  multiAndSingleTagMaker(currentPage,ids.mainPageGrandChild.second[1],ids.mainPageGrandChild.second[2],ids.mainPageGrandChild.second[3],element => {
    element.innerText = i+1
    fontAndLayoutEditor(element, numberStyle[0], numberStyle[1], numberStyle[2])
  })
}
const puNext = multiAndSingleTagMaker(pageUp,ids.mainPageGrandChild.third[0][1],ids.mainPageGrandChild.third[0][2],ids.mainPageGrandChild.third[0][3],ids.mainPageGrandChild.third[0][4])
const puEnd = multiAndSingleTagMaker(pageUp,ids.mainPageGrandChild.third[1][1],ids.mainPageGrandChild.third[1][2],ids.mainPageGrandChild.third[1][3],ids.mainPageGrandChild.third[1][4])

kingGodFlexEditor(root,'row','center','center')
kingGodFlexEditor(boardPaging,'row','center','center')
kingGodFlexEditor(pageDown,'row','center','center')
kingGodFlexEditor(pageUp,'row','center','center')
fontAndLayoutEditor(boardPaging,'80vw','3vh','1')
fontAndLayoutEditor(currentPage,'20%','100%','1')
kingGodFlexEditor(currentPage,'row','center','center')
