const str =
  // "쌀 100g, 강황가루 15g, 고구마 50g, 닭육수 300g\n양념장 : 영양부추 10g, 다진청고추 15g, 다진홍고추 15g, 다진양파 15g, 간편 어간장 15g";
  "닭가슴살 280g, 미나리 50g, 쌀 50g, 청경채 60g\n무조림 : 무 150g, 맛간장 15g, 고춧가루 15g, 다진마늘 5g, 물 200g\n소스 : 된장 15g, 매실청 15g, 들기름 10g, 다진양파 10g, 검은깨 5g, 다진마늘 5g";

// 재료와 양념장으로 분할
const [ingredientStr, seasoningStr] = str.split("\n");

// 재료 추출
const ingredients = ingredientStr.split(",").map((ingr) => {
  const [name, amount] = ingr.trim().split(" ");
  return { name, amount };
});

// 양념 재료 추출
const seasoningIngredients = seasoningStr
  .split(":")[1]
  .split(",")
  .map((ingr) => {
    const [name, amount] = ingr.trim().split(" ");
    return { name, amount };
  });

// 결과 출력
console.log(ingredients); // [{ name: '쌀', amount: '100g' }, { name: '강황가루', amount: '15g' }, { name: '고구마', amount: '50g' }, { name: '닭육수', amount: '300g' }]
console.log(seasoningIngredients); // [{ name: '영양부추', amount: '10g' }, { name: '다진청고추', amount: '15g' }, { name: '다진홍고추', amount: '15g' }, { name: '다진양파', amount: '15g' }, { name: '간편 어간장', amount: '15g' }]
