///사용재료 데이터
const ingredients = {
  ingredients_id : 1,
  ingredients : 'beef broth'
};
console.log(ingredients);
/////////////////////////////////////////////////////////////////

///레시피 조리재료 데이터
const recipeViewIngredient = {
  recipe_ingredients_id : '',
	recipe_id : 1,
	recipe_weight : '500g',
	regist_ingredients : 'anything',
	ingredients_id : '1'
};
console.log(recipeViewIngredient);
console.log(recipeViewIngredient.recipe_weight);
/////////////////////////////////////////////////////////////////

///레시피 뷰 임의 데이터 ==> 레시피 사진, 레시피 이름, 등록자 정보 및 조회수, 재료
const recipeViewRegisterInfo = {
  recipe_id: 1,
  recipe_register: "김첨지",
  recipe_title: "설렁탕",
  thumbnail_img:
  "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png",
  recipe_views: 0,
  recipe_recommend: 0,
};
console.log(recipeViewRegisterInfo);


///레시피 뷰 임의 데이터 => 조리기구 데이터
const recipeViewCooker = {
  cooker_id : 1,
  cooker : 'pot'
}
console.log(recipeViewCooker);

///레시피 조리순서 데이터
const recipeViewStep = [
  {
    step_id: 1,
    recipe_id: 1,
    recipe_step_content: "요리를 시작한다.",
    recipe_step_img: "https://recipe1.ezmember.co.kr/cache/recipe/2018/01/05/3bb9dfbf636d5dd2397b31b8f00700fd1.jpg",
    recipe_step_number: 3,
  },
  {
    step_id: 2,
    recipe_id: 1,
    recipe_step_content: "조리기구를 쓴다.",
    recipe_step_img: "https://recipe1.ezmember.co.kr/cache/recipe/2023/05/03/e409cd940d27db7c89c4f3c2224299511.jpg",
    recipe_step_number: 1,
  },
  {
    step_id: 3,
    recipe_id: 1,
    recipe_step_content: "불을 킨다.",
    recipe_step_img: "https://recipe1.ezmember.co.kr/cache/recipe/2023/05/09/e83886d167d4bc7725161451a49a9e161.jpg",
    recipe_step_number: 2,
  },
];
console.log(recipeViewStep);
console.dir(recipeViewStep[0].recipe_step_img);

export default {
  ingredients,
  recipeViewIngredient,
  recipeViewRegisterInfo,
  recipeViewCooker,
  recipeViewStep
};