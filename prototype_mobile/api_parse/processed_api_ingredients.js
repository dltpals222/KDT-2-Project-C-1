import fs from "fs";

try {
  const data = fs.readFileSync("../JSON/api_processed1.json", "utf-8");
  const jsonData = JSON.parse(data);

  let result = {
    row: [],
  };

  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      const ele = jsonData[key];
      const ingredients = ele.regist_ingredients
        .replace(
          /개|큰술|모|마리|작은술|무염버터|줄기|약간|컵|다진|봉지|쪽|장|고명|된|오렌지당근펀치|고기완자양념|다시마육수|양념|사골육수|육수|피시볼반죽|고기삶는|불린것|것|밑간/g,
          ""
        )
        .split(",");
      const newIngredients = ingredients.map((recipe) =>
        recipe.replace(/[^가-힣]/g, "")
      );

      newIngredients;
      const newRecipe = {
        ingredients: newIngredients.join(","),
      };
      result.row.push(newRecipe);
    }
  }

  const jsonResult = JSON.stringify(result, null, 2);

  fs.writeFileSync("./processed_data_ingredients_table.json", jsonResult);
  console.log("저장완료");
} catch (err) {
  console.error(err);
}
