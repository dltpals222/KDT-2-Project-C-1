import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

const http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    // const datajson = JSON.stringify(data, null, 2);
    const data = JSON.parse(http.responseText);
    const jsonDataTitle = data.map((value) => [value.title]);
    const jsonDataIngredients = data.map((value) => [value.ingredients]);
    const jsonDataContent = data.map((value) => [value.content]);
    const root = document.getElementById("root");
    const header = multiAndSingleTagMaker(root, "div", "header");
    header.textContent = jsonDataTitle[0];
    const main = multiAndSingleTagMaker(root, "div", "main");
    main.textContent = jsonDataIngredients[0];
    const footer = multiAndSingleTagMaker(root, "div", "footer");
    footer.textContent = jsonDataContent[0];
  }
};
http.open("GET", "db.json");
http.send();
