import all_mighty_editor from '../module/all_mighty_editor.js'

const {multiAndSingleTagMaker,positionEditor,fontAndLayoutEditor,kingGodFlexEditor,allMightyStyleEditor} = all_mighty_editor

const root = document.getElementById('root')
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
      allMightyStyleEditor(element,aTagObject)
    }],["",'a',{href : '#',id : "before-number"},1,element => {
      element.innerText = '<이전'
      allMightyStyleEditor(element,aTagObject)
    }]],
    second : ["", 'a',{href : '#'},1],
    third : [["", 'a',{href : '#',id : 'next-number'},1,element => {
      element.innerText = '다음>'
      allMightyStyleEditor(element,aTagObject)
    }],["", 'a',{href : '#',id : 'end-number'},1,element => {
      element.innerText = '맨뒤>>'
      allMightyStyleEditor(element,aTagObject)
    }]]
  }
}

const aTagObject = {
  'text-decoration':'none',
  color:'black',
}
// allMightyStyleEditor(element,aTagObject)

const numberStyle = ['15px','10px',"1"]
const tagASet={href : '#'}

//게시글이 나타날 div
const boardList = multiAndSingleTagMaker(root,ids.mainList[1],ids.mainList[2])
//게시글 임시 div 추가
multiAndSingleTagMaker(boardList,ids.mainListChild[1],ids.mainListChild[2],ids.mainListChild[3],ids.mainListChild[4])

//페이지네이션 최상위 div
const numberListWrap = multiAndSingleTagMaker(root,ids.mainPage[1],ids.mainPage[2])
//이전 페이지 상위 div
const pageDown = multiAndSingleTagMaker(numberListWrap,ids.mainPageChild.first[1],ids.mainPageChild.first[2])
//현재 페이지 나타내는 구간
const currentPage = multiAndSingleTagMaker(numberListWrap,ids.mainPageChild.second[1],ids.mainPageChild.second[2])
//다음 페이지 상위 div
const pageUp = multiAndSingleTagMaker(numberListWrap,ids.mainPageChild.third[1],ids.mainPageChild.third[2])

//맨앞 버튼
const startNumber = multiAndSingleTagMaker(pageDown,ids.mainPageGrandChild.first[0][1],ids.mainPageGrandChild.first[0][2],ids.mainPageGrandChild.first[0][3],ids.mainPageGrandChild.first[0][4])

//이전 버튼
const beforeNumber = multiAndSingleTagMaker(pageDown,ids.mainPageGrandChild.first[1][1],ids.mainPageGrandChild.first[1][2],ids.mainPageGrandChild.first[1][3],ids.mainPageGrandChild.first[1][4])


//다음 버튼
const nextNumber = multiAndSingleTagMaker(pageUp,ids.mainPageGrandChild.third[0][1],ids.mainPageGrandChild.third[0][2],ids.mainPageGrandChild.third[0][3],ids.mainPageGrandChild.third[0][4])

//맨뒤 버튼
const endNumber = multiAndSingleTagMaker(pageUp,ids.mainPageGrandChild.third[1][1],ids.mainPageGrandChild.third[1][2],ids.mainPageGrandChild.third[1][3],ids.mainPageGrandChild.third[1][4])

//css구간
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
  totalDoc : 462,     //게시물 전체 갯수
  onePageData : 20,     //한페이지에 나타낼 데이터 수(게시글 수)
  currentPage : 6,      //현재 페이지
  onePageNumber : 5,   //한 화면에 나타낼 페이지 수(밑에 12345 숫자 누르는 버튼)
}

//총 페이지 수
const totalPage = Math.ceil(pagination.totalDoc/pagination.onePageData);

//화면에 보여질 페이지 그룹
const aPageGroup = Math.ceil(pagination.currentPage/pagination.onePageNumber)

//화면에 보여질 페이지 그룹 끝부분
const EndPageGroup = Math.ceil(totalPage/pagination.onePageNumber)

//화면에 그려질 첫번째 페이지
let displayOnePage = 0;
if(totalPage - (pagination.onePageNumber -1) < 0){
  displayOnePage = 1; //계산된 값이 0 이하면 첫번째 페이지
} else {
  displayOnePage = totalPage - (pagination.onePageNumber -1);
}

//화면에 그려질 마지막 페이지
let displayEndPage = 0;
if((aPageGroup * pagination.onePageNumber) > totalPage){
  displayEndPage = totalPage; //계산된 값이 총페이지보다 많으면 마지막 페이지
} else {
  displayEndPage = aPageGroup * pagination.onePageNumber;
}

//맨앞, 이전 버튼 디스플레이
if(aPageGroup === 1){
  startNumber.style.display = 'none'
  beforeNumber.style.display = 'none'
} else {
  startNumber.style.display = 'block'
  beforeNumber.style.display = 'block'
}

//현재 페이지 버튼
for(let i =0; i< pagination.onePageNumber;i++){
  multiAndSingleTagMaker(currentPage,ids.mainPageGrandChild.second[1],ids.mainPageGrandChild.second[2],ids.mainPageGrandChild.second[3],
    element => {
      element.setAttribute('data-num',i+1), 
      element.innerText = i+1
      allMightyStyleEditor(element,aTagObject)

      const currentChildA = Array.from(document.querySelectorAll('#current-page>a'))
      const index = currentChildA.map()
      console.log(index)
    }
  )
}

//맨뒤, 다음 버튼 디스플레이
if(aPageGroup === EndPageGroup){
  nextNumber.style.display = 'none'
  endNumber.style.display = 'none'
} else {
  nextNumber.style.display = 'block'
  endNumber.style.display = 'block'
}

