import amEditor from "../module/all_mighty_editor.js";

const {multiAndSingleTagMaker,PositionEditor,fontAndLayoutEditor,kingGodFlexEditor,allMightyStyleEditor} = amEditor;

const root = document.getElementById("root");
const header = multiAndSingleTagMaker(root, 'div', 'header');
const main = multiAndSingleTagMaker(root, 'div', 'main');
const footer = multiAndSingleTagMaker(root, 'div', 'footer');
const headerWrap = multiAndSingleTagMaker(header, 'div','header-wrap');
const headerSearch = multiAndSingleTagMaker(header, 'div', 'header-search');
const headerMenu = multiAndSingleTagMaker(header, 'div', 'header-menu');
const headerWrapLeft = multiAndSingleTagMaker(headerWrap, 'div','header-Left')
const headerWrapTitle = multiAndSingleTagMaker(headerWrap,'div','header-title');
const headerWrapRight = multiAndSingleTagMaker(headerWrap,'div','header-Right')

const rootCss = {
  width : "100vw",
  height : "100vh"
}

const headerCss = {
  width : "100%",
  height : "25%"
}

const mainCss = {
  width : "100%",
  height : "65%"
}

const footerCss = {
  width : "100%",
  height : "10%"
}

const headerWrapCss = {
  width : "100%",
  height : "30%"
}

const headerSearchCss = {
  width : "100%",
  height : "30%"
}

const headerMenuCss = {
  width : "100%",
  height : "40%"
}

const headerWrapLeftCss = {
  width : "30%",
  height : "100%"
}

const headerWrapTitleCss = {
  width : "40%",
  height : "100%"
}

const headerWrapRightCss = {
  width : "30%",
  height : "100%"
}

allMightyStyleEditor(root, rootCss);
allMightyStyleEditor(header, headerCss);
allMightyStyleEditor(main, mainCss);
allMightyStyleEditor(footer, footerCss);
allMightyStyleEditor(headerWrap,headerWrapCss);
allMightyStyleEditor(headerSearch, headerSearchCss);
allMightyStyleEditor(headerMenu,headerMenuCss);
allMightyStyleEditor(headerWrapLeft, headerWrapLeftCss);
allMightyStyleEditor(headerWrapTitle,headerWrapTitleCss);
allMightyStyleEditor(headerWrapRight,headerWrapRightCss);

kingGodFlexEditor(headerWrap,"flex","row", "center", "center");