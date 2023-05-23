import fs from "fs";

try {
  const data = fs.readFileSync(
    "./processed_data_ingredients_table_first.json",
    "utf-8"
  );
  const jsonData = JSON.parse(data);
  const ingredientsData = jsonData.flatMap((recipe) =>
    recipe.ingredients.split(",")
  );
  //중복제거
  const ingredientsData2 = [...new Set(ingredientsData)];
  //공백제거
  const filter_trim_data = ingredientsData2.filter(
    (ingredient) => ingredient.trim() !== ""
  );
  const transformedData = {
    ingredients: filter_trim_data,
  };

  const jsonResult = JSON.stringify(transformedData, null, 2);
  fs.writeFileSync(
    "./processed_data_ingredients_table_second.json",
    jsonResult
  );
  console.log("저장완료");
} catch (err) {
  console.error(err);
}
