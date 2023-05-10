///사용재료 데이터
const ingredients_table = {
  ingredients_id : 'something else',
  ingredients : 'random'
};
console.log(ingredients_table);
/////////////////////////////////////////////////////////////////

///레시피 조리재료 데이터
const recipe_ingredients_table = {
  recipe_ingredients_id : 'null',
	recipe_id : 1,
	recipe_weight : 'g',
	regist_ingredients : 'anything',
	ingredients_id : '1',
};
console.log(recipe_ingredients_table);
console.log(recipe_ingredients_table.regist_ingredients);
/////////////////////////////////////////////////////////////////

const recipe_regist_table = {
  recipe_id: 1,
  recipe_register: "김첨지",
  recipe_title: "설렁탕",
  thumbnail_img:
  "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png",
  recipe_views: 0,
  recipe_recommend: 0,
};
console.log(recipe_regist_table);
///레시피 조리순서 데이터
const recipe_step_table = [
  {
    step_id: 1,
    recipe_id: 1,
    recipe_step_content: "example_1",
    recipe_step_img: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png",
    recipe_step_number: 3,
  },
  {
    step_id: 2,
    recipe_id: 1,
    recipe_step_content: "example_2",
    recipe_step_img: "https://recipe1.ezmember.co.kr/cache/recipe/2023/05/03/e409cd940d27db7c89c4f3c2224299511.jpg",
    recipe_step_number: 1,
  },
  {
    step_id: 3,
    recipe_id: 1,
    recipe_step_content: "example_3",
    recipe_step_img: "https://recipe1.ezmember.co.kr/cache/recipe/2023/05/09/e83886d167d4bc7725161451a49a9e161.jpg",
    recipe_step_number: 2,
  },
];
console.log(recipe_step_table);
console.dir(recipe_step_table[0].recipe_step_img);

export default {
  ingredients_table,
  recipe_ingredients_table,
  recipe_regist_table,
  recipe_step_table
};