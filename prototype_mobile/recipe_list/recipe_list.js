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
  rootId : ['header','main','footer'],
  mainId : ['advanced-search','list-wrap','number-list-wrap'],
  recipeBtnWrap : "recipe-regist",
  recipeBtn : "recipe-regist-btn",
  f : {id : 'root'},
  g : {id : 'root', class : 'object', type : 'module'},
  // h : //빈칸으로 둘 시 a와 같은 동작을 함
} 

multiAndSingleTagMaker(root, 'div', ids.rootId)
multiAndSingleTagMaker(main, 'div', ids.mainId)
multiAndSingleTagMaker(main, 'form', ids.recipeBtnWrap)
multiAndSingleTagMaker(recipeRegist, 'button', ids.recipeBtn)