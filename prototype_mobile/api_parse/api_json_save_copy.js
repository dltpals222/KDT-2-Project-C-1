import http from "http";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import { raw } from "mysql";

const apiUrl =
  "http://openapi.foodsafetykorea.go.kr/api/ea64844179af470daeb3/COOKRCP01/json/1/4";
const fileName = "tmp4Data.json";
const filePath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  fileName
);

http
  .get(apiUrl, (res) => {
    let rawData = "";
    res.on("data", (chunk) => {
      rawData += chunk;
    });
    res.on("end", async () => {
      try {
        const parsedData = JSON.parse(rawData);
        let tmpData = "\n";
        // console.log(parsedData.COOKRCP01.row[0].RCP_PARTS_DTLS);
        for (let i = 0; i < parsedData.COOKRCP01.row.length; i++) {
          tmpData += parsedData.COOKRCP01.row[i].RCP_PARTS_DTLS;
          console.log(parsedData.COOKRCP01.row[i].RCP_PARTS_DTLS);
        }
        await fs.writeFile(filePath, JSON.stringify(tmpData));
        console.log(`Data saved to ${fileName}`);
      } catch (error) {
        console.error(error);
      }
    });
  })
  .on("error", (error) => {
    console.error(error);
  });
