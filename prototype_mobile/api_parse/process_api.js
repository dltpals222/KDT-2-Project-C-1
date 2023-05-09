import fs from "fs";

const removed_Ingredients = [
  "g",
  "ml",
  "약간",
  "개",
  "알",
  "적당량",
  "a-z",
  "0-9",
];

fs.readFile("./data_1000.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const json = JSON.parse(data);
    let result = [];
    for (let i = 0; i < 1000; i++) {
      const RCP = json.COOKRCP01.row[i].RCP_PARTS_DTLS;
      // const sp1 = RCP.split("\n|,");
      // const sp2 = RCP.replace(/\n/ && /[()\s]/g, "");
      const sp2 = RCP.replace(/\n/g, "")
        .replace(/●+[가-힣]*:\s+/g, "")
        .replace(/●+[가-힣]*:+/g, "")
        .replace(/\s+[가-힣]:+/g, "")
        .replace(/\s+[가-힣]+[가-힣]:+/g, "")
        .replace(/●+[가-힣\s가-힣]*:\s+/g, "")
        .replace(/●+[가-힣\s가-힣]*\s+:/g, "")
        .replace(/●+[가-힣\s가-힣]*\s+:\s+/g, "")
        .replace(/●+["주재료"]+\s+:/g, "")
        .replace(/●+["주재료"]+\s+:/g, "")
        .replace(
          /●주재료\s+|저나트륨|\[소스소개\]|\[소스소개|●주재료|●재료|주재료|재료\s+|•필수|\s+주|새우두부계란찜|•필수 재료|\[1인분\]|●|\[\s2인분\s\]/g,
          ","
        );
      const sp1 = sp2.match(
        /* 다시마 1장(5x1cm */
        // /([가-힣\s가-힣]+[\(가-힣0-9\d\.a-z\)]*[0-9\d\.a-z]*)/g &&
        //   /([가-힣\s가-힣]+[\(가-힣0-9\d\.가-힣\)]*[0-9\d\.a-z]*)/g &&
        //   /([가-힣\s가-힣]+[\(0-9\d\.\/가-힣\)]*[0-9\d\.a-z]*)/g &&
        //   /([가-힣\s가-힣]+[\(0-9\/가-힣\)]+[0-9\d\.가-힣]*)/g &&
        //   /([가-힣\s가-힣]+[\(0-9가-힣0-9a-z\)]+[0-9\d\.가-힣]*)/g &&
        //   /([가-힣\s가-힣]+[\(0-9⅓0-9a-z\)]+[0-9\d\.가-힣]*)/g &&
        // /([가-힣\s가-힣]+[\(가-힣0-9\d\/\da-z가-힣\s가-힣0-9\d\.\/\da-z0-9¼½⅓0-9a-zA-z\da-z\da-z0-9\x0-9a-z\)]*[가-힣0-9\d\.가-힣]*)/g
        /([가-힣\s가-힣]+[\(가-힣0-9\d\/\da-z가-힣\s가-힣0-9\d\.\/\da-z0-9¼½⅓a-zA-Z\da-z\da-z0-9\x0-9a-z\)]*[가-힣0-9\d\.가-힣]*)/g
      );
      console.log(sp1);
      // const sp2 = sp1.replace();
      const json_Stringify = JSON.stringify(sp1);
      if (json_Stringify) {
        result += json_Stringify + "\n";
      }
    }
    fs.writeFile("./process_api_data.json", result, (err) => {
      if (err) throw err;
      console.log("저장완료");
    });
  }
});
