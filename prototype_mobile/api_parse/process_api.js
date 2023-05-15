import fs from "fs";

try {
  const data = fs.readFileSync("./data_1000.json", "utf-8");
  const jsonData = JSON.parse(data);

  let result = {
    row: [],
  };

  let recipeId = 1; // 시작 recipe_id 값

  for (const key in jsonData.COOKRCP01.row) {
    if (jsonData.COOKRCP01.row.hasOwnProperty(key)) {
      const ele = jsonData.COOKRCP01.row[key];
      const RCP = ele.RCP_PARTS_DTLS;
      const sp1 = RCP.replace(/\n/g, "")
        .replace(/\s+/g, "")
        .replace(/●+[가-힣]*:\s+/g, "")
        .replace(/●+[가-힣]*:+/g, "")
        .replace(/\s+[가-힣]:+/g, "")
        .replace(/\s+[가-힣]+[가-힣]:+/g, "")
        .replace(/●+[가-힣\s가-힣]*:\s+/g, "")
        .replace(/●+[가-힣\s가-힣]*\s+:/g, "")
        .replace(/●+[가-힣\s가-힣]*\s+:\s+/g, "")
        .replace(
          /●주재료\s+|저나트륨|반죽재료\)|\[|\]|재료|인분|설탕시럽설탕과물을동량으로하여중불에서서서히녹인다.기호에맞게만든다.|\[소스소개\]|\[소스소개|●주재료|●재료|주재료|재료\s+|•필수|\s+주\s|새우두부계란찜|•필수 재료|\[1인분\]|●|\[\s2인분\s\]/g,
          ","
        );
      const sp2 =
        sp1.match(
          /([가-힣\s가-힣]+[\(가-힣0-9\d\/\da-z가-힣\s가-힣0-9\d\.\/\da-z0-9¼½⅓⅔ⅹ×㎖a-zA-Z\da-z\da-z0-9x0-9a-z\)]*[가-힣0-9\d\.가-힣]*)/gm
        ) || [];

      const sp3 = sp2.join(", ");
      const recipe = {
        recipe_id: recipeId,
        recipe_weight: null,
        regist_ingredients: sp3,
        ingredients_id: null,
      };
      result.row.push(recipe);

      recipeId++; // recipe_id 값 증가
    }
  }

  const jsonResult = JSON.stringify(result, null, 2);

  fs.writeFileSync("./processed_data.json", jsonResult);
  console.log("저장완료");
} catch (err) {
  console.error(err);
}
