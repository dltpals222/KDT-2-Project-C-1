/**
 *
 * @param {string} hsSelect total, title, ingredients 중 하나
 * @returns {string} 미리 입력해 둔 쿼리문
 */
export function queryString(hsSelect) {
  let searchQuery = "";
  if (hsSelect === "total") {
    searchQuery = `SELECT *
    FROM (
      SELECT t1.*, t2.regist_ingredients
      FROM recipe_regist_table AS t1
      INNER JOIN (
  SELECT recipe_id, GROUP_CONCAT(regist_ingredients) AS regist_ingredients
  FROM recipe_ingredients_table
  WHERE regist_ingredients LIKE ?
  GROUP BY recipe_id
  ) AS t2 ON t1.recipe_id = t2.recipe_id
  
  UNION
  
  SELECT t1.*, t2.regist_ingredients
  FROM recipe_regist_table AS t1
  INNER JOIN (
    SELECT recipe_id, GROUP_CONCAT(regist_ingredients) AS regist_ingredients
    FROM recipe_ingredients_table
    GROUP BY recipe_id
    ) AS t2 ON t1.recipe_id = t2.recipe_id
    
    WHERE recipe_title LIKE ?
    ) AS subquery
    ORDER BY recipe_id;
    `;
  } else if (hsSelect === "title") {
    searchQuery = `select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id where recipe_title LIKE ? order by t1.recipe_id;`;
  } else if (hsSelect === "ingredients") {
    searchQuery = `select * from recipe_regist_table as t1 inner join (select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table where regist_ingredients LIKE ? group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id order by t1.recipe_id;`;
  }
  return searchQuery;
}

/**
 *
 * @param {string} inputValue 배열에 들어갈 값
 * @param {string} hsSelect total은 배열에 값 2개, 나머지는 배열에 1개
 * @returns {Array<string|number>} 배열에 값이 2개(동일한 값) 또는 1개
 */
export function postQueryArray(inputValue, hsSelect) {
  let Array = [];
  function likeString(qrData) {
    return "%" + qrData + "%";
  }

  if (hsSelect === "total") {
    for (let i = 0; i < 2; i++) {
      Array.push(likeString(inputValue));
    }
  } else {
    Array.push(likeString(inputValue));
  }
  return Array;
}
