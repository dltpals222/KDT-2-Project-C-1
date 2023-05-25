# 재료에서 특정 키워드 찾는 쿼리문 (오름차순)

`select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table where regist_ingredients LIKE '%계란%' group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id order by t1.recipe_id;`

# 레시피명에서 특정 키워드 찾는 쿼리문 (오름차순)

`select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id where recipe_title LIKE '%계란%' order by t1.recipe_id;`

# union으로 2가지 조합을 합쳐서 테이블 생성쿼리 만듦(중복 제거 O)

`select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table where regist_ingredients LIKE '%계란%' group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id union select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id where recipe_title LIKE '%계란%';`

# union으로 2가지 조합을 합쳐서 테이블 생성쿼리 만듦(중복 제거 O, 정렬 추가 : 오름차순)

`SELECT _
FROM (
SELECT t1._, t2.regist_ingredients
FROM recipe_regist_table AS t1
INNER JOIN (
SELECT recipe_id, GROUP_CONCAT(regist_ingredients) AS regist_ingredients
FROM recipe_ingredients_table
WHERE regist_ingredients LIKE '%계란%'
GROUP BY recipe_id
) AS t2 ON t1.recipe_id = t2.recipe_id

UNION

SELECT t1.\*, t2.regist_ingredients
FROM recipe_regist_table AS t1
INNER JOIN (
SELECT recipe_id, GROUP_CONCAT(regist_ingredients) AS regist_ingredients
FROM recipe_ingredients_table
GROUP BY recipe_id
) AS t2 ON t1.recipe_id = t2.recipe_id

WHERE recipe_title LIKE '%계란%'
) AS subquery
ORDER BY recipe_id;
`
