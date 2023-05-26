///20230509기준으로 recipe_view폴더안의 파일들은 20230509_view.js만을 기준으로 볼 것
///나머지 파일들을 볼 필요가 없음

import all_mighty_editor from "../module/all_mighty_editor.js";
import recipe_view_table from "../recipe_view/dummy_test_data.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;


const {
  originalIngredients,
  recipeViewIngredient,
  recipeViewRegisterInfo,
  recipeViewCooker,
  recipeViewStep
} = recipe_view_table;

///전체 메인부분
const main = multiAndSingleTagMaker(root,'div','main',1,(ele)=>{
  ele.textContent = '';
});
fontAndLayoutEditor(main, '430px', '932px', 1, 'sienna');
kingGodFlexEditor(main,'column','center','space-evenly');


///맨 위 사진부분
const mainPic = multiAndSingleTagMaker(main,'img','mainPic',1,(ele)=>{
  ele.textContent = '';
});
fontAndLayoutEditor(mainPic, '65%', '20%', 1 , 'lightgray');
main.appendChild(mainPic);
mainPic.style.cursor = 'pointer';
mainPic.setAttribute('src', recipeViewRegisterInfo.thumbnail_img);
////////////////////////////////////////////////////////////////////////

///사용자(등록자)의 이름 및 조회수 추천수 컨테이너
const container = multiAndSingleTagMaker(main, 'div', 'container', 1);
fontAndLayoutEditor(container, '70%', '5%', 1, 'lightgray');
kingGodFlexEditor(container, 'row', 'center', 'space-around');

///등록자의 이름
const name = multiAndSingleTagMaker(main,'h3','name',1,(ele)=>{
  //ele.textContent = recipeViewRegisterInfo.recipe_register;
});
fontAndLayoutEditor(name, '50%', '50%', 1, 'lightsalmon');
kingGodFlexEditor(name, 'row', 'center', 'center');
container.appendChild(name);

///조회수와 추천수 컨테이너
const viewNrecommend = multiAndSingleTagMaker(container, 'div', 'view', 1);
fontAndLayoutEditor(viewNrecommend, '30%', '50%', 1, 'lightsalmon');
kingGodFlexEditor(viewNrecommend, 'row', 'center', 'space-evenly');

///조회수 부분
const view = multiAndSingleTagMaker(viewNrecommend, 'span','view',1,(ele)=>{
  //ele.textContent = recipeViewRegisterInfo.recipe_views;
});
fontAndLayoutEditor(view, '40%', '80%', 1 , 'lightcoral');
kingGodFlexEditor(view, 'row', 'center', 'center');
viewNrecommend.appendChild(view);

///추천수 부분
const recommend = multiAndSingleTagMaker(viewNrecommend, 'span','view',1,(ele)=>{
  //ele.textContent = recipeViewRegisterInfo.recipe_recommend;
});
fontAndLayoutEditor(recommend, '40%', '80%', 1 , 'lightcoral');
kingGodFlexEditor(recommend, 'row', 'center', 'center');
viewNrecommend.appendChild(recommend);

/*
///더미코드(볼 필요없음)
mainPic.addEventListener('click',function browseImgMainFile(){
  const formData = new FormData();
  formData.append('image', imageInput.files[0]);
  
  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
*/
////////////////////////////////////////////////////////////////////////
///메인사진을 클릭하면 파일업로드
mainPic.onclick = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'text/plain,text/html, .jsp';

  input.click();
  input.onchange = function(event){
    uploadMainPicFile(event.target.files[0]);
  };
}

function uploadMainPicFile(file){
  const reader = new FileReader();
  reader.readAsText(file,'UTF-8');

  reader.onload = function(){
    output.innerText = reader.result;
  }
}
////////////////////////////////////////////////////////////////////////

///레시피 정보(레시피 이름, 재료, 조리기구 등등)
const recipeInfo = multiAndSingleTagMaker(main, 'div', 'recipeInfo', 1,(ele)=>{
  ele.textContent = '';
});
fontAndLayoutEditor(recipeInfo, '70%', '50%', 1 , 'lightgray');
kingGodFlexEditor(recipeInfo, 'column', 'center', 'space-evenly');
main.appendChild(recipeInfo);

///레시피 제목(이름) 부분
const recipeTitle = multiAndSingleTagMaker(recipeInfo, 'h1', 'recipeTitle', 1, (ele)=>{
  ele.textContent = recipeViewRegisterInfo.recipe_title;
});
fontAndLayoutEditor(recipeTitle, '80%', '15%', 1, 'lightsalmon');
kingGodFlexEditor(recipeTitle, 'row', 'center', 'center');
///레시피 재료 부분
const ingredient = multiAndSingleTagMaker(recipeInfo, 'div', 'ingredient', 1, (ele)=>{
  ele.textContent = '재료 : ';
});
ingredient.style.padding = '10px'
fontAndLayoutEditor(ingredient, '80%', '50%', 1, 'lightsalmon');
kingGodFlexEditor(ingredient, 'row', 'top', 'space-evenly');


///레시피에 사용된 재료들 리스트의 컨테이너
const firstContainer = multiAndSingleTagMaker(ingredient, 'ul', 'firstContainer', 1);
fontAndLayoutEditor(firstContainer, '75%', '100%', 1, 'lightcoral');
kingGodFlexEditor(firstContainer, 'column', 'center')
firstContainer.style.padding = '0';

/*
///레시피에 사용된 재료들 리스트로 나열한 부분
const ingredientsList = multiAndSingleTagMaker(ingredient, 'li', 'ingredientsList', 1, (ele)=>{
  ele.textContent = originalIngredients.ingredients;
});
fontAndLayoutEditor(ingredientsList, '100%', '15%', 1, 'lightcoral');
kingGodFlexEditor(ingredientsList, 'row','center', 'center');
firstContainer.appendChild(ingredientsList);
*/

//밑의 선을 기준으로부터 볼 필요X
////////////////////////////////////////////////////////////////////////
/*
///레시피 조리기구 부분
const cooker = multiAndSingleTagMaker(recipeInfo, 'div', 'cooker', 1, (ele)=>{
  ele.textContent = '조리기구 : ';
});
cooker.style.padding = '10px'
fontAndLayoutEditor(cooker, '80%', '20%', 1, 'lightsalmon');
kingGodFlexEditor(cooker, 'row', 'space-evenly', 'space-evenly');



///레시피에 사용된 조리기구들 리스트의 컨테이너
const secondContainer = multiAndSingleTagMaker(cooker, 'ul', 'firstContainer', 1);
fontAndLayoutEditor(secondContainer, '65%', '100%', 1, 'lightcoral');
kingGodFlexEditor(secondContainer, 'column', 'center')
secondContainer.style.padding = '0';
//secondContainer.style.margin = '5px';
*/

/*
///레시피에 사용된 조리기구들 리스트로 나열한 부분
const cookerList = multiAndSingleTagMaker(cooker, 'li', 'cookerList', 1, (ele)=>{
  ele.textContent = recipeViewCooker.cooker;
});
fontAndLayoutEditor(cookerList, '100%', '40%', 1, 'lightcoral');
kingGodFlexEditor(cookerList, 'row', 'center', 'center');
secondContainer.appendChild(cookerList);
*/
////////////////////////////////////////////////////////////////////////

//for(let i = 0; i < 2; i++){
  ///레시피 조리순서 컨테이너부분
  const orderList = multiAndSingleTagMaker(main, 'div', 'orderList', 1);
  fontAndLayoutEditor(orderList, '80%','15%', 1, 'lightgray');
  kingGodFlexEditor(orderList, 'row-reverse', 'center', 'space-evenly');
  main.appendChild(orderList);
//}
//조리순서안의 사진부분
const orderPic = multiAndSingleTagMaker(orderList , 'img', 'orderPic', 1);
fontAndLayoutEditor(orderPic, '40%','90%', 1, 'lightsalmon');
orderList.appendChild(orderPic);
orderPic.style.cursor = 'pointer';
orderPic.setAttribute('src', recipeViewStep[0].recipe_step_img);

/////////////////////////////////////////
/*
///더미코드(볼 필요없음)
recipe_step_table.forEach((step) => {
  const img = document.createElement("img");
  img.src = step.recipe_step_img;
  orderPic.appendChild(img);
});
*/

/*
///더미코드(볼 필요없음)
orderPic.addEventListener('click',function browseImgMainFile(){
  const formData = new FormData();
  formData.append('image', imageInput.files[0]);

  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});

orderPic.onclick = () => {
  //alert('hello!');
  const formData = new FormData();
  formData.append('image', imageInput.files[0]);

  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
}
*/
////////////////////////////////////////////////////////////////////////
/*
///조리순서사진을 클릭하면 파일업로드
orderPic.onclick = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'text/plain,text/html, .jsp';

  input.click();
  input.onchange = function(event){
    uploadInnerOrderPicFile(event.target.files[0]);
  };
}

function uploadInnerOrderPicFile(file){
  const reader = new FileReader();
  reader.readAsText(file,'UTF-8');

  reader.onload = function(){
    output.innerText = reader.result;
  }
}
*/
////////////////////////////////////////////////////////////////////////

///조리순서안의 조리방법 또는 내용
const orderInfo = multiAndSingleTagMaker(orderList, 'div', 'orderInfo', 1);
fontAndLayoutEditor(orderInfo, '50%','90%', 1, 'lightsalmon');
kingGodFlexEditor(orderInfo, 'row', 'center', 'space-evenly');
orderList.appendChild(orderInfo);

///볼필요X
/*
///조리순서안의 순서번호 부여한 부분
const sequence = multiAndSingleTagMaker(orderInfo, 'span', 'sequence', 1, (ele)=>{
  ele.textContent = recipeViewStep[1].recipe_step_number;
});
fontAndLayoutEditor(sequence, '15%', '20%', 1 , 'lightcoral');
kingGodFlexEditor(sequence, 'row', 'center', 'center');
*/


///조리순서안의 내용 부여한 부분
const syno = multiAndSingleTagMaker(orderInfo, 'span', 'sequence', 1, (ele)=>{
  
  fontAndLayoutEditor(syno, '75%', '30%', 1 , 'lightcoral');
kingGodFlexEditor(syno, 'row', 'center', 'center');
fetch("recipe_step.json")
.then(function(response){
  return response.json();
})
.then(function(info){
  let placeholder = document.getElementById('orderInfo');
  let out = "";
  for(let inforomation of info){
    {
      /*
      for(let i = 1; i < 1000; i++){
        if(i < 10){
          return `0${i}`;
        }else{
          return i;
        }
      }
      */
    }
    //out += `${inforomation.MANUAL[i]}
    out += `${inforomation.MANUAL01}
    `;
  }
  placeholder.innerHTML = out;
});
  
  //ele.textContent = recipeViewStep[1].recipe_step_content;
});



////////////////////////////////////////////////////////////////////////
/*
///목록버튼 부분
const button = multiAndSingleTagMaker(main, 'div', 'button', 1, (ele)=>{
  ele.textContent = '목록';
});
fontAndLayoutEditor(button, '15%', '3%', 1, 'lightgray');
kingGodFlexEditor(button, 'row', 'center', 'center');
*/
const button = multiAndSingleTagMaker(main, 'button', 'button', 1, (ele)=>{
  ele.textContent = '목록';
});
button.style.cursor = 'pointer';
fontAndLayoutEditor(button, '15%', '3%', 1, 'lightgray');
kingGodFlexEditor(button, 'row', 'center', 'center');
/*
button.onclick = () => {
  addEventListener('click', function(){
    location.href='main.html';
  })
}
*/
button.onclick = () => {
  location.href='recipe_list.html';
}
