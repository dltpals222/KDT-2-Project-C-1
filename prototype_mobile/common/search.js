import fs from "fs";
import path from "path";

const recipeTitleData = JSON.parse(
  fs.readFileSync(path.join(path.resolve(), "../JSON/recipe_list_data.json"), "utf-8")
);
const recipeIngredientsData = JSON.parse(
  fs.readFileSync(path.join(path.resolve(), "../api_parse/processed_data_ingredients_table_second.json"), "utf-8")
);
const recipeArr = {
  recipeTitle: recipeTitleData.map((value) => value.recipe_title),
  recipeIngredients: recipeIngredientsData.ingredients,
};
