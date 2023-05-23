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
fontAndLayoutEditor(main, '100vw', '100vh', 1, 'cornflowerblue');
kingGodFlexEditor(main,'column','center','space-evenly');