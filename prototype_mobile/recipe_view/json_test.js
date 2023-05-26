//const root = document.getElementById('root');

import all_mighty_editor from "../module/all_mighty_editor.js";
import recipe_view_table from "../recipe_view/dummy_test_data.js";

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
fontAndLayoutEditor(main, '430px', '932px', 1, 'sienna');
kingGodFlexEditor(main,'column','center','space-evenly');



fetch(
  `http://openapi.foodsafetykorea.go.kr/api/ea64844179af470daeb3/COOKRCP01/json/1/2`
).then(function(response) {
  return response.json();
}).then(function (json) {
  // 2
  console.log(JSON.stringify(json));

  // 3
  showHeroes(json);

}).catch(function(error) {
  console.log(error);
});


function showOrder(jsonObj) {
  let recipe = jsonObj['row'];
for(let i = 0; i < recipe.length; i++){
  const container = multiAndSingleTagMaker(main, 'div', 'orderList', 1);
  fontAndLayoutEditor(orderList, '80%','15%', 1, 'lightgray');
  kingGodFlexEditor(orderList, 'row-reverse', 'center', 'space-evenly');
  main.appendChild(orderList);

  //조리순서의 내용 넣는 부분
  const orderInfo = multiAndSingleTagMaker(orderList, 'div', 'orderInfo', 1);
  fontAndLayoutEditor(orderInfo, '50%','90%', 1, 'lightsalmon');
  kingGodFlexEditor(orderInfo, 'row', 'center', 'space-evenly');
  orderList.appendChild(orderInfo);

  //이미지 넣는 부분
  const orderPic = multiAndSingleTagMaker(orderList , 'img', 'orderPic', 1);
  fontAndLayoutEditor(orderPic, '40%','90%', 1, 'lightsalmon');
  orderList.appendChild(orderPic);
  orderPic.style.cursor = 'pointer';
  //orderPic.setAttribute('src', recipeViewStep[0].recipe_step_img);
  //orderPic.setAttribute('src', 'http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_2.png');


function arrayNumber(number=19){
  
  for(let i = 0; i < number; i++){
    if(i < 9){
      return `0${i+1}`;
    }else{
      return i+1;
    }
  }
}
  }
    }
//console.log(arrayNumber(5));

/*
function showModernHeroes(jsonObj) {
  let heroes = jsonObj['members'];

  for (let i = 0; i < heroes.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');

      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';

      let superPowers = heroes[i].powers;
      for (let j = 0; j < superPowers.length; j++) {
          let listItem = document.createElement('li');
          listItem.textContent = superPowers[j];
          myList.appendChild(listItem);
      }

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

      root.appendChild(myArticle);
  }
}
*/
