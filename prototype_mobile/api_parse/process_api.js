import fs from "fs";

fs.readFile("./data_1000.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const jsonData = JSON.parse(data);
    let result = {
      row: [],
    };

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
          ingredients: sp3,
        };
        result.row.push(recipe);
      }
    }

    const jsonResult = JSON.stringify(result, null, 2);

    fs.writeFile("./processed_data.json", jsonResult, (err) => {
      if (err) throw err;
      console.log("저장완료");
    });
  }
});
