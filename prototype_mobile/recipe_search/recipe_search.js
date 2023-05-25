function searchQueryString(like) {
  return `select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table where regist_ingredients LIKE '%${like}%' group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id
  union
  select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id where recipe_title LIKE '%${like}%';`;
}
