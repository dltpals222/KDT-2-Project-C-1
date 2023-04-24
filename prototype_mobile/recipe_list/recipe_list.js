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
  g : {id : 'root', class : 'object', type : 'module'},
  // h : //빈칸으로 둘 시 a와 같은 동작을 함
} 
const root = document.getElementById('root');

const header = multiAndSingleTagMaker(root, 'div', 'header')
const main = multiAndSingleTagMaker(root, 'div', 'main')
const footer = multiAndSingleTagMaker(root, 'div', 'footer')

const advancedSearch = multiAndSingleTagMaker(main, 'div', 'advanced-search',1, element=> {
  element.innerHTML = '상세검색'
})
const recipeListWrap = multiAndSingleTagMaker(main, 'div', 'recipe-list-wrap')
const numberListWrap = multiAndSingleTagMaker(main, 'div', 'number-list-wrap')
const recipeBtnWrap = multiAndSingleTagMaker(main, 'form', 'recipe-btn-wrap')
const recipeBtn = multiAndSingleTagMaker(recipeBtnWrap, 'button', 'recipe-btn')
const recipeListBox = multiAndSingleTagMaker(recipeListWrap, 'div', 'recipe-list-box')
const recipeListImage = multiAndSingleTagMaker(recipeListBox, 'image', 'recipe-list-image')
const recipeListTextWrap = multiAndSingleTagMaker(recipeListBox, 'div', 'recipe-list-text-wrap')
const recipeListText = multiAndSingleTagMaker(recipeListTextWrap, 'div', ids.recipeListTextId)

