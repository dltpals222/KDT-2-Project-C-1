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
      const sp2 = RCP.replace(/\n/g, "");
      const sp1 = sp2.match(
        /([가-힣\s가-힣]+[\(가-힣0-9\d\.a-z)]*[0-9\d\.a-z]*)/g &&
          /([가-힣\s가-힣]+[\(가-힣0-9\d\.가-힣)]*[0-9\d\.a-z]*)/g
        // /([가-힣\s가-힣]+[\(0-9\d\.\/가-힣)]*[0-9\d\.a-z]*)/g &&
        // /([가-힣\s가-힣]+[\(0-9\/가-힣)]*[0-9\d\.가-힣]*)/g &&
        // /([가-힣\s가-힣]+[\(가-힣0-9\d\.\/\da-z)]+[가-힣0-9\d\.가-힣]*)/g
      );
      // const sp2 = sp1.replace();
      console.log(sp1);
      if (sp1) {
        result += sp1.join("\n") + "\n";
      }
    }
    fs.writeFile("./process_api_data.json", result, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
});
