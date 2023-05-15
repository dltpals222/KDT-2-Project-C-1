import fs from "fs";

try {
  const data = fs.readFileSync("./data_1000.json", "utf-8");
  const jsonData = JSON.parse(data);

  let result = {
    row: [],
  };

  for (const key in jsonData.COOKRCP01.row) {
    if (jsonData.COOKRCP01.row.hasOwnProperty(key)) {
      const ele = jsonData.COOKRCP01.row[key];
      const HASH = ele.HASH_TAG;
      const ATT = ele.ATT_FILE_NO_MAIN;
      const NM = ele.RCP_NM;
      const recipe = {
        recipe_register: HASH,
        recipe_title: NM,
        thumbnail_img: ATT,
        recipe_views: 1000,
        recipe_recommend: 100,
      };
      result.row.push(recipe);
    }
  }

  const jsonResult = JSON.stringify(result, null, 2);

  fs.writeFileSync("./processed_data.json", jsonResult);
  console.log("저장완료");
} catch (err) {
  console.error(err);
}
