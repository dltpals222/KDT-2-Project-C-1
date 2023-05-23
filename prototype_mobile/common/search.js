import fs from "fs";
import path, { parse } from "path";

const recipeListData = fs.readFileSync(path.join(path.resolve(), "../JSON/recipe_list_data.json"), "utf-8");
const parseData = JSON.parse(recipeListData);
const recipeArr = {
  recipe_title: parseData.map((value) => value.recipe_title),
};

console.log(parseData[0]);
