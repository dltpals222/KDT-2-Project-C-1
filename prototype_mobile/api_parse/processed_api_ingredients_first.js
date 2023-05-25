import fs from "fs";

try {
  const data = fs.readFileSync("../JSON/api_processed1.jsons", "utf-8");
  const jsonData = JSON.parse(data);

  let result = [];

  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      const ele = jsonData[key];
      const ingredients = ele.regist_ingredients
        .replace(
          /개|큰술|모|마리|작은술|무염버터|줄기|달걀유자청간소스|올리브오일곁들이야채|송송썬|설탕허브오일드레싱|어린잎채소복분자소스|송송썬붉은고추달래무침|양배추얇게썬|약간|컵|다진|봉지|쪽|장|큰|고명|된|어린잎채소스테이크반죽|오렌지당근펀치|고기완자양념|다시마육수|양념|사골육수|육수|피시볼반죽|고기삶는|시럼설탕과|물을동량으로하여|중불에서서서히녹인다|기호에맞게만든다|불린것|것|밑간/g,
          ","
        )
        .split(",");
      const newIngredients = ingredients.map((recipe) =>
        recipe.replace(/[^가-힣]/g, "")
      );
      const newRecipe = {
        ingredients: newIngredients.join(","),
      };

      result.push(newRecipe);
    }
  }
  const jsonResult = JSON.stringify(result, null, 2);

  fs.writeFileSync("./processed_data_ingredients_table_first.json", jsonResult);
  console.log("저장완료");
} catch (err) {
  console.error(err);
}
