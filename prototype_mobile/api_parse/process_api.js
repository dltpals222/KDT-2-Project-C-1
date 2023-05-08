import fs from "fs";

const removed_Ingredients = ["g", "ml", "약간", "개", "알", "적당량", ""];

fs.readFile("./data_1000.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const json = JSON.parse(data);
    for (let i = 0; i < 1000; i++) {
      const RCP = json.COOKRCP01.row[i].RCP_PARTS_DTLS;
      const sp1 = RCP.split("\n");
      const newarr = {};
      for (let j = 0; j < sp1.length; j++) {
        const [name, contents] = sp1[j].split(",");
        newarr[name.trim()] = contents;
      }
      console.log(newarr);
    }
    /*const all_Parts = RCP.split(/\n/);
    //recipe_title
    console.log(all_Parts[0]);
    //recipe_ingredients + recipe_weight
    console.log(all_Parts[1]);
    const a = all_Parts[1].split(",");
    console.log(a);
    console.log(all_Parts[2]);
    console.log(all_Parts[3]); */
    /*     fs.writeFile("process_api.json", JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log("err");
    }); */
  }
});
