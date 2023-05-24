
import all_mighty_editor from "../module/all_mighty_editor.js";
import recipe_view_table from "../recipe_view/dummy_test_data.js";
import recipe_Step_Maker from "../module/recipe_step_maker.js";


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

const {
  recipeStepMaker
} = recipe_Step_Maker;


const main = multiAndSingleTagMaker(root,'div','main',1,(ele)=>{
  ele.textContent = '';
});
fontAndLayoutEditor(main, '430px', '932px', 1, 'sienna');
kingGodFlexEditor(main,'column','center','space-evenly');
root.appendChild(main);

const orderList = multiAndSingleTagMaker(main, 'div', 'orderList', 1);
fontAndLayoutEditor(orderList, '75%','20%', 1, 'lightsalmon');
kingGodFlexEditor(orderList, 'row', 'center', 'space-evenly');
main.appendChild(orderList);

const orderPic = multiAndSingleTagMaker(orderList , 'img', 'orderPic', 1);
fontAndLayoutEditor(orderPic, '100px','90px', 1, 'orange');
orderList.appendChild(orderPic);
//orderPic.setAttribute('src', recipeViewStep[0].recipe_step_img);
fetch("recipe_step.json")
.then(function(response){
  return response.json();
})
.then(function(pic){
  let placeholder = document.getElementById('orderPic');
  let out = "";
  for(let picture of pic){
    out += `${picture.MANUAL_IMG02}
    `;
  }
  placeholder.innerHTML = out;
});

const orderInfo = multiAndSingleTagMaker(orderList, 'div', 'orderInfo', 1);
fontAndLayoutEditor(orderInfo, '180px','90px', 1, 'orange');
kingGodFlexEditor(orderInfo, 'row', 'center', 'space-evenly');
orderList.appendChild(orderInfo);
fetch("recipe_step.json")
.then(function(response){
  return response.json();
})
.then(function(info){
  let placeholder = document.getElementById('orderInfo');
  let out = "";
  for(let inforomation of info){
    out += `${inforomation.MANUAL01}
    `;
  }
  placeholder.innerHTML = out;
});


const button = multiAndSingleTagMaker(main, 'button', 'button', 1, (ele)=>{
  ele.textContent = '목록';
});
button.style.cursor = 'pointer';
fontAndLayoutEditor(button, '15%', '3%', 1, 'lightgray');
kingGodFlexEditor(button, 'row', 'center', 'center');
button.onclick = () => {

}


/////////////////////////////////////////////////////////////
