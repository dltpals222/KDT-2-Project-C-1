import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;


///전체 메인부분
const main = multiAndSingleTagMaker(root,'div','main',1,(ele)=>{
  ele.textContent = '';
});
fontAndLayoutEditor(main, '100vw', '100vh', 1, 'cornflowerblue');
kingGodFlexEditor(main,'column','center','space-evenly');


///맨 위 사진부분
const mainPic = multiAndSingleTagMaker(main,'img','mainPic',1,(ele)=>{
  ele.textContent = '';
});
fontAndLayoutEditor(mainPic, '65%', '20%', 1 , 'aqua');
main.appendChild(mainPic);

////////////////////////////////////////////////////////////////////////

///레시피 정보(레시피 이름, 재료, 조리기구 등등)
const recipeInfo = multiAndSingleTagMaker(main, 'div', 'recipeInfo', 1,(ele)=>{
  ele.textContent = '';
});
fontAndLayoutEditor(recipeInfo, '70%', '40%', 1 , 'aqua');
kingGodFlexEditor(recipeInfo, 'column', 'center', 'space-evenly');
main.appendChild(recipeInfo);
///레시피 제목(이름)
const recipeTitle = multiAndSingleTagMaker(recipeInfo, 'div', 'recipeTitle', 1, (ele)=>{
  ele.textContent = '레시피의 이름';
});
fontAndLayoutEditor(recipeTitle, '80%', '15%', 1, 'skyblue');
kingGodFlexEditor(recipeTitle, 'row', 'center', 'center');
///레시피 사용 재료
const ingredient = multiAndSingleTagMaker(recipeInfo, 'div', 'ingredient', 1, (ele)=>{
  ele.textContent = '재료 : ............';
});
fontAndLayoutEditor(ingredient, '80%', '60%', 1, 'skyblue');
kingGodFlexEditor(ingredient, 'row', 'center', 'center');
///레시피 사용 조리기구
const cooker = multiAndSingleTagMaker(recipeInfo, 'div', 'cooker', 1, (ele)=>{
  ele.textContent = '조리기구 : ..........';
});
fontAndLayoutEditor(cooker, '80%', '15%', 1, 'skyblue');
kingGodFlexEditor(cooker, 'row', 'center', 'center');

////////////////////////////////////////////////////////////////////////

///레시피 조리순서 컨테이너부분
const orderList = multiAndSingleTagMaker(main, 'div', 'orderList', 1);
fontAndLayoutEditor(orderList, '80%','15%', 1, 'aqua');
kingGodFlexEditor(orderList, 'row-reverse', 'center', 'space-evenly');
main.appendChild(orderList);
//조리순서안의 사진부분
const orderPic = multiAndSingleTagMaker(orderList , 'img', 'orderPic', 1);
fontAndLayoutEditor(orderPic, '40%','90%',1, 'skyblue');
orderList.appendChild(orderPic);
///조리순서안의 조리방법 또는 내용
const orderInfo = multiAndSingleTagMaker(orderList, 'div', 'orderInfo', 1, (ele)=>{
  /*
  for(let i = 0; i < 3; i++){
    ele = document.createElement('li');
    ele.style.listStyleType = 'square';
    ele.textContent = '1)요리를 합시다.';
    orderedList.appendChild(ele);
  }
  */
  ele.textContent = '1)ssssssssssssssss';
});
fontAndLayoutEditor(orderInfo, '50%','90%',1, 'skyblue');
kingGodFlexEditor(orderInfo, 'column', 'center', 'center');
orderList.appendChild(orderInfo);

////////////////////////////////////////////////////////////////////////

///버튼 부분
const button = multiAndSingleTagMaker(main, 'div', 'button', 1, (ele)=>{
  ele.textContent = '목록';
});
fontAndLayoutEditor(button, '15%', '3%', 1, 'lightgray');
kingGodFlexEditor(button, 'row', 'center', 'center');