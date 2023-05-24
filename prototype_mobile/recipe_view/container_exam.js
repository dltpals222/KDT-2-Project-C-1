
import all_mighty_editor from "../module/all_mighty_editor.js";
import recipe_view_table from "./dummy_test_data.js";
import recipe_Step_Maker from "../module/recipe_step_maker.js";
//import recipe_step_test_data from "../recipe_view/recipe_step.json"


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

//const {
//  recipeStep
//} = recipe_step_test_data;


const {
  recipeStepMaker
} = recipe_Step_Maker;


/////////////////////////////////////////////////////////////

const main = multiAndSingleTagMaker(root,'div','main',1,(ele)=>{
  ele.textContent = '';
});
fontAndLayoutEditor(main, '430px', '932px', 1, 'cornflowerblue');
kingGodFlexEditor(main,'column','center','space-evenly');
root.appendChild(main);

//const body = document.querySelector('Body');
//body = kingGodFlexEditor(body, 'column', 'center', 'space-evenly');

//조리순서 컨테이너
const container = multiAndSingleTagMaker(main, 'div', 'container', 1, "", "");
fontAndLayoutEditor(container, '350px', '150px', 1, 'aquamarine');
kingGodFlexEditor(container, 'row', 'center', 'space-evenly');
main.appendChild(container);

//조리순서 사진부분
const pic = multiAndSingleTagMaker(container, 'img', 'pic', 1);
fontAndLayoutEditor(pic, '100px', '100px', 1, 'aqua');
container.appendChild(pic);
pic.setAttribute('src', recipeStep[0]);
fetch("recipe_step.json")
.then(function(response){
  return response.json();
})
.then(function(pic){
  let placeholder = document.getElementById('pic');
  let out = "";
  for(let picture of pic){
    out += `${picture.MANUAL_IMG01}
    `;
  }
  placeholder.innerHTML = out;
});

//조리순서 설명부분
const info = multiAndSingleTagMaker(container, 'span', 'info', 1, '', '');
fontAndLayoutEditor(info, '180px', '100px', 1, 'skyblue');
info.style.padding = '5px';
kingGodFlexEditor(info, 'row', 'center', 'space-evenly');
container.appendChild(info);
fetch("recipe_step.json")
.then(function(response){
  return response.json();
})
.then(function(info){
  let placeholder = document.getElementById('info');
  let out = "";
  for(let information of info){
    out += `${information.MANUAL01}
    `;
  }
  placeholder.innerHTML = out;
});