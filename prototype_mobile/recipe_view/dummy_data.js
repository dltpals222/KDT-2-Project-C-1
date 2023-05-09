///사용재료 데이터
const ingredients_table = {
  ingredients_id : 'something else',
  ingredients : 'random'
};

/////////////////////////////////////////////////////////////////

///레시피 조리재료 데이터
const recipe_ingredients_table = {
  recipe_ingredients_id : 'null',
	recipe_id : 1,
	recipe_weight : 'g',
	regist_ingredients : 'anything',
	ingredients_id : '1',
};

/////////////////////////////////////////////////////////////////

///레시피 조리순서 데이터
const recipe_regist_table = {
  recipe_id: 1,
  recipe_register: "김첨지",
  recipe_title: "설렁탕",
  thumbnail_img:
    "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png",
  recipe_views: 0,
  recipe_recommend: 0,
};

const recipe_step_table = [
  {
    step_id: 1,
    recipe_id: 1,
    recipe_step_content: "example_1",
    recipe_step_img: "https://recipe1.ezmember.co.kr/img/pic_none4.gif",
    recipe_step_number: 3,
  },
  {
    step_id: 2,
    recipe_id: 1,
    recipe_step_content: "example_2",
    recipe_step_img: "https://recipe1.ezmember.co.kr/img/pic_none2.gif",
    recipe_step_number: 1,
  },
  {
    step_id: 3,
    recipe_id: 1,
    recipe_step_content: "example_3",
    recipe_step_img: "https://recipe1.ezmember.co.kr/img/pic_none3.gif",
    recipe_step_number: 2,
  },
];

export default {
  ingredients_table,
  recipe_ingredients_table,
  recipe_regist_table,
  recipe_step_table
};