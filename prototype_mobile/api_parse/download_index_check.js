import fs from "fs";

const data = fs.readFileSync("./data_2.json", "utf8");
const recipes = JSON.parse(data);
const recipeCount = recipes.length;

// console.log(`총 ${recipeCount}개의 레시피가 있습니다.`);
console.log(recipes);
console.log();
