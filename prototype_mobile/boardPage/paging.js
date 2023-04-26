import all_mighty_editor from '../module/all_mighty_editor.js'

const {multiAndSingleTagMaker,positionEditor,fontAndLayoutEditor,kingGodFlexEditor,allMightyStyleEditor} = all_mighty_editor

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
    first : [["",'a',{href : '#',id : "start-number"},1,element => {
      element.innerText = '<<맨앞'
    }],["",'a',{href : '#',id : "before-number"},1,element => {
      element.innerText = '<이전'
    }]],
    second : ["", 'a',{href : '#'},1],
    third : [["", 'a',{href : '#',id : 'next-number'},1,element => {
      element.innerText = '다음>'
    }],["", 'a',{href : '#',id : 'end-number'},1,element => {
      element.innerText = '맨뒤>>'
    }]]
  }
}

const numberStyle = ['15px','10px',"1"]
const tagASet={href : '#'}


const boardList = multiAndSingleTagMaker(root,ids.mainList[1],ids.mainList[2])
const numberListWrap = multiAndSingleTagMaker(root,ids.mainPage[1],ids.mainPage[2])
multiAndSingleTagMaker(boardList,ids.mainListChild[1],ids.mainListChild[2],ids.mainListChild[3],ids.mainListChild[4])
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
  fontAndLayoutEditor(numberListWrap.children[i],'','','1',"","",element => {
    element.margin = '5px'
  })
}

fontAndLayoutEditor(numberListWrap,'80vw','3vh','1')
fontAndLayoutEditor(currentPage,'35%','','1')
kingGodFlexEditor(currentPage,'','center','space-evenly')

const pagination = {
  totalPaper : 462,   //게시물 전체 갯수
  onePageData : 20,   //한페이지에 나타낼 데이터 수
  currentPage : 1,    //현재 페이지
  onePageNumber : 10, //한 화면에 나타낼 페이지 수
}

//총 페이지 수
const totalPage = Math.ceil(pagination.totalPaper/pagination.onePageData);

//화면에 보여질 페이지 그룹
const aPage = Math.ceil(pagination.currentPage/pagination.onePageNumber)

//화면에 그려질 첫번째 페이지
let displayOnePage = 0;
if(totalPage - (pagination.onePageNumber -1) < 0){
  displayOnePage = 1;
} else {
  displayOnePage = totalPage - (pagination.onePageNumber -1);
}

//화면에 그려질 마지막 페이지
let displayEndPage = 0;
if((aPage * pagination.onePageNumber) > totalPage){
  displayEndPage = totalPage;
} else {
  displayEndPage = aPage * pagination.onePageNumber;
}



console.log(totalPage)
console.log(MathCeil)