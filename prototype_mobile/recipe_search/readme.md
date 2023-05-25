# 재료에서 특정 키워드 찾는 쿼리문

`select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table where regist_ingredients LIKE '%계란%' group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id;`

# 레시피명에서 특정 키워드 찾는 쿼리문

`select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id where recipe_title LIKE '%계란%';`

# union으로 2가지 조합을 합쳐서 테이블 생성쿼리 만듦(중복 제거 O)

`select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table where regist_ingredients LIKE '%계란%' group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id
union
select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id where recipe_title LIKE '%계란%';`
