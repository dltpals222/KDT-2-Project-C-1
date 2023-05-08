import http from "http";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const apiUrl =
  "http://openapi.foodsafetykorea.go.kr/api/ea64844179af470daeb3/COOKRCP01/json/1/2";
const fileName = "ingredients.json";
const filePath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),fileName);

http
  .get(apiUrl, (res) => {
    let rawData = "";
    res.on("data", (chunk) => {
      rawData += chunk;
    });
    res.on("end", async () => {
      try {
        await fs.writeFile(filePath, rawData);
        console.log(`Data saved to ${fileName}`);
      } catch (error) {
        console.error(error);
      }
    });
  })
  .on("error", (error) => {
    console.error(error);
  });
