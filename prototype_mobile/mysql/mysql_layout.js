import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

const root = document.getElementById("root");
const header = multiAndSingleTagMaker(root, "div", "header");
header.innerHTML = "${dbData.title}";
const main = multiAndSingleTagMaker(root, "div", "main");
const footer = multiAndSingleTagMaker(root, "div", "footer");
