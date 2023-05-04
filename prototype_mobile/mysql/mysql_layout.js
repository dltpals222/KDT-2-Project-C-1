import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

//ajax 를 사용해서 xml을 이용한 정보 교환
const http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    //json 파일에 있는 데이터의 값을 출력
    const data = JSON.parse(http.responseText);
    const jsonDataTitle = data.map((value) => [value.title]);
    const jsonDataIngredients = data.map((value) => [value.ingredients]);
    const jsonDataContent = data.map((value) => [value.content]);
    //레이아웃 부분.
    const root = document.getElementById("root");
    const header = multiAndSingleTagMaker(root, "div", "header");
    header.textContent = jsonDataTitle[jsonDataTitle.length - 1];
    const main = multiAndSingleTagMaker(root, "div", "main");
    main.textContent = jsonDataIngredients[jsonDataIngredients.length - 1];
    const footer = multiAndSingleTagMaker(root, "div", "footer");
    footer.textContent = jsonDataContent[jsonDataContent.length - 1];
  }
};
//db.json 파일 GET방식으로 오픈
http.open("GET", "db.json");
http.send();
