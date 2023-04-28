import { get } from "https";

get(
  "https://openapi.foodsafetykorea.go.kr/api/ea64844179af470daeb3/COOKRCP01/json/1/1000",
  (response) => {
    let data = "";

    // 데이터를 받을 때마다 실행
    response.on("data", (chunk) => {
      data += chunk;
    });
    // 모든 데이터를 받은 후 실행
    response.on("end", () => {
      let tmpApiParse = JSON.parse(data);
      console.log(tmpApiParse.COOKRCP01.row);
    });
  }
).on("error", (err) => {
  console.log("에러 발생: " + err.message);
});
