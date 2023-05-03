const fs = require("fs");

// JSON 파일 읽기
const rawData = fs.readFileSync("data.json");
const jsonData = JSON.parse(rawData);

// 레시피 수 계산
const recipeCount = Object.keys(jsonData).length;

console.log(
  `data.json 파일에는 ${recipeCount}개의 레시피가 포함되어 있습니다.`
);
