const str =
  "쌀 100g, 강황가루 15g, 고구마 50g, 닭육수 300g\n양념장 : 영양부추 10g, 다진청고추 15g, 다진홍고추 15g, 다진양파 15g, 간편 어간장 15g";

// 양념 재료와 재료 정보 분리
const [ingredientStr, seasoningStr] = str.split(": ");
const ingredients = ingredientStr.split(",").map((ingr) => {
  const [name, amount] = ingr.trim().split(" ");
  return { name, amount };
});

// 양념 재료 정보 추출
const seasoningIngredients = seasoningStr.split(",").map((ingr) => {
  const [name, amount] = ingr.trim().split(" ");
  return amount ? { name, amount } : { name };
});

// 결과 출력
console.log(ingredients);
console.log(seasoningIngredients);
