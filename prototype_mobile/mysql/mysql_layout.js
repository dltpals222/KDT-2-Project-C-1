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
    const data = JSON.parse(http.responseText);
    // const datajson = JSON.stringify(data, null, 2);
    // container.innerHTML = "<div>" + map[1] + "</div>";
    const map = data.map((value) => [value.title]);

    const root = document.getElementById("root");
    const header = multiAndSingleTagMaker(root, "div", "header");
    header.textContent = map[1];
    const main = multiAndSingleTagMaker(root, "div", "main");
    main.textContent = jsonData.title;
    const footer = multiAndSingleTagMaker(root, "div", "footer");
  }
};
http.open("GET", "db.json");
http.send();
