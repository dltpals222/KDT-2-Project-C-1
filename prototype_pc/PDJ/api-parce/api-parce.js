import { get } from "https";

// 페이지 범위를 지정
const startPage = 1;
const endPage = 1114;

// 페이지 별로 요청을 보내고 데이터를 저장할 배열 초기화
let recipes = [];

// 각 페이지에 대한 요청을 반복
for (let page = startPage; page <= endPage; page++) {
  const url = `https://openapi.foodsafetykorea.go.kr/api/ea64844179af470daeb3/COOKRCP01/json/${page}/${page}`;

  get(url, (response) => {
    let data = "";

    // 데이터를 받을 때마다 실행
    response.on("data", (chunk) => {
      data += chunk;
    });

    // 모든 데이터를 받은 후 실행
    response.on("end", () => {
      const recipeData = JSON.parse(data);

      // 데이터를 배열에 추가
      recipes = recipes.concat(recipeData.COOKRCP01.row);

      // 모든 페이지에서 데이터를 받았는지 확인
      if (recipes.length === page - startPage + 1) {
        console.log(
          `총 ${recipes.length}개의 요리 레시피 데이터를 받았습니다.`
        );
        console.log(recipes);
      }
    });
  }).on("error", (err) => {
    console.log("에러 발생: " + err.message);
  });
}
