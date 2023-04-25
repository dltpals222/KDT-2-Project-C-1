import all_mighty_editor from "../module/all_mighty_editor.js";

const {multiAndSingleTagMaker,PositionEditor,fontAndLayoutEditor,kingGodFlexEditor,allMightyStyleEditor} = all_mighty_editor;

/* const ids = {
  header : "header",
  b : "string",
  c : 123,
  d : ["string"],
  e : ['array','man','su','mu','gang'],
  f : {id : 'root'},
  g : {id : 'root', class : 'object', type : 'module'},
  // h : //빈칸으로 둘 시 a와 같은 동작을 함
} */
const ids = {
  recipeListTextId : ['recipe-name','recipe-need-ingredient','recipe-need-equipment','recipe-writer','recipe-number-referrals'],
  number : ['number-1'],
  // h : //빈칸으로 둘 시 a와 같은 동작을 함
} 
const body = document.body
const root = document.getElementById('root');

const header = multiAndSingleTagMaker(root, 'div', 'header')
const main = multiAndSingleTagMaker(root, 'div', 'main')
const footer = multiAndSingleTagMaker(root, 'div', 'footer')

//상세 검색 박스
const advancedSearch = multiAndSingleTagMaker(main, 'div', 'advanced-search',1, element=> {
  element.innerHTML = '상세검색'
})
//레시피 리스트 박스
const recipeListWrap = multiAndSingleTagMaker(main, 'div', 'recipe-list-wrap')
const recipeListBox = multiAndSingleTagMaker(recipeListWrap, 'div', 'recipe-list-box')
const recipeListImage = multiAndSingleTagMaker(recipeListBox, 'image', 'recipe-list-image')
const recipeListTextWrap = multiAndSingleTagMaker(recipeListBox, 'div', 'recipe-list-text-wrap')
const recipeListText = multiAndSingleTagMaker(recipeListTextWrap, 'div', ids.recipeListTextId)

//레시피 <<맨앞 <이전 1, 2, 3, 4, 5 다음> 맨뒤>> 
const numberListWrap = multiAndSingleTagMaker(main, 'div', 'number-list-wrap')
// 맨앞
const startNumber = multiAndSingleTagMaker(numberListWrap, 'div', '',1, element =>{
  element.innerHTML = "<<맨앞";
})
// 이전
const beforeNumber = multiAndSingleTagMaker(numberListWrap, 'div', '',1, element => {
  element.innerHTML = "<이전";
})
//1~5번
const number1 = multiAndSingleTagMaker(numberListWrap, 'div', '',1, element => {
  element.innerHTML = "1";
})
const number2 = multiAndSingleTagMaker(numberListWrap, 'div', '',1, element => {
  element.innerHTML = "2";
})
const number3 = multiAndSingleTagMaker(numberListWrap, 'div', '',1, element => {
  element.innerHTML = "3";
})
const number4 = multiAndSingleTagMaker(numberListWrap, 'div', '',1, element => {
  element.innerHTML = "4";
})
const number5 = multiAndSingleTagMaker(numberListWrap, 'div', '',1, element => {
  element.innerHTML = "5";
})

//다음
const nextNumber = multiAndSingleTagMaker(numberListWrap, 'div', '',1, element => {
  element.innerHTML = "다음>";
})
//맨뒤 
const endNumber = multiAndSingleTagMaker(numberListWrap, 'div', '',1, element => {
  element.innerHTML = "맨뒤>>";
})

//레시피 등록 버튼
const recipeBtnWrap = multiAndSingleTagMaker(main, 'form', 'recipe-btn-wrap')
const recipeBtn = multiAndSingleTagMaker(recipeBtnWrap, 'button', 'recipe-btn')


