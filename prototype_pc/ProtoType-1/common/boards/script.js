import tData from "./board_temp_data.js";
console.log(Object.keys(tData.tempData));

const tempDataTwenty = [];
//
for (let i = 0; i < tData.tempData.length; i += 20) {
  //
  const a = tData.tempData.slice(i, i + 20);
  tempDataTwenty.push(a);
}
console.dir(tempDataTwenty[0][0]);

//form 설정함수
function formActionSeletor(action, method, ele) {
  ele.action = action;
  ele.method = method;
}

//createElement+appendChild 생성기
function tagMaker(tag, parent, id, callback) {
  const element = document.createElement(tag);
  element.id = id;
  parent.appendChild(element);
  if (callback) {
    callback(element);
  }
  return element;
}

//createElement+appendChild 반복생성기
function multiTagMaker(tag, parent, num) {
  for (let i = 0; i < num; i++) {
    const element = document.createElement(tag);
    parent.appendChild(element);
  }
}

//flex 설정함수
function felexEditor(display, flexDirection, alignItems, justifyContent, ele) {
  ele.style.display = display;
  ele.style.flexDirection = flexDirection;
  ele.style.alignItems = alignItems;
  ele.style.justifyContent = justifyContent;
}

//layout 설정함수
function layoutEditor(wid, hei, background, ele) {
  ele.style.width = wid;
  ele.style.height = hei;
  ele.style.background = background;
}

//position 설정함수
function positionEditor(position, top, bottom, left, right, ele) {
  ele.style.position = position;
  ele.style.top = top;
  ele.style.bottom = bottom;
  ele.style.left = left;
  ele.style.right = right;
}

//@ 컨텐츠 부분 목록 출력[오름차순]
function contentFromMaker(parent) {
  // for (let i = 0; i < tempData.length; i++) {
  //   //
  //   //tempData = 임시객체
  //   const element = document.createElement("form");
  //   element.style.padding = "2px 0px";
  //   element.style.borderBottom = "1px black solid";
  //   layoutEditor("100%", "", "", element);
  //   felexEditor("flex", "row", "", "space-between", element);
  //   parent.appendChild(element);
  //   const indexP = document.createElement("p");
  //   indexP.style.paddingLeft = "10px";
  //   indexP.textContent = tempData[i].index;
  //   element.appendChild(indexP);
  //   const subjectP = document.createElement("p");
  //   subjectP.textContent = tempData[i].subject;
  //   element.appendChild(subjectP);
  //   const nameP = document.createElement("p");
  //   nameP.textContent = tempData[i].name;
  //   element.appendChild(nameP);
  // }

  //@ 컨텐츠 부분 목록 출력[내림차순]
  for (let i = 19; i >= 0; i--) {
    //tempData = 임시객체
    const element = document.createElement("form");
    element.style.padding = "2px 20px";
    element.style.borderBottom = "1px black solid";
    layoutEditor("", "20px", "#ccccff", element);
    felexEditor("flex", "row", "center", "space-between", element);
    parent.appendChild(element);

    const indexP = document.createElement("p");
    // indexP.style.paddingLeft = "10px";
    indexP.textContent = tData.tempData[i].index;
    element.appendChild(indexP);

    const subjectP = document.createElement("p");
    subjectP.textContent = tData.tempData[i].subject;
    element.appendChild(subjectP);

    const nameP = document.createElement("p");
    nameP.textContent = tData.tempData[i].name;
    element.appendChild(nameP);
  }
}
// ? -----------------------------함수부분 끝-----------------------------------------
// ? -----------------------------css부분 시작----------------------------------------
felexEditor("flex", "row", "center", "center", document.body); //document.body
layoutEditor("100%", "", "#ffffff", main); //div#main
felexEditor("flex", "row", "center", "center", main);

const boardDiv = tagMaker("div", main, "boardDiv"); //div#boardDiv
positionEditor("relative", "", "", "", "", boardDiv);
layoutEditor("75%", "", "#EEEEEE", boardDiv);
felexEditor("flex", "column", "center", "", boardDiv);

const rowTitle = tagMaker("ul", boardDiv, "rowTitle"); //번호 제목 작성자
rowTitle.style.padding = "10px 20px";
rowTitle.style.borderBottom = "2px black solid";
rowTitle.style.listStyleType = "none";
layoutEditor("70%", "40px", "", rowTitle);
felexEditor("flex", "row", "end", "space-between", rowTitle);
multiTagMaker("li", rowTitle, 3);
rowTitle.children[0].textContent = "번호";
rowTitle.children[1].textContent = "제목";
rowTitle.children[2].textContent = "작성자";

//!컨텐트 랩
const contentWrap = tagMaker("div", boardDiv, "contentWrap");
contentWrap.style.borderBottom = "2px black solid";
layoutEditor("75%", "", "#ffffff", contentWrap);
felexEditor("flex", "column", "center", "", contentWrap);

const contentUl = tagMaker("ul", contentWrap, "contentUl"); //컨텐트랩-컨텐트UL
contentUl.style.margin = "0px 0px";
contentUl.style.padding = "0px 0px";
layoutEditor("100%", "", "", contentUl);
felexEditor("flex", "column", "", "", contentUl);

//컨텐트랩-컨텐츠
contentFromMaker(contentUl);

//! 컨텐트랩 - 페이지 인덱스랩
const pageIndexWrap = tagMaker("form", boardDiv, "pageIndexWrap");
layoutEditor("75%", "20px", "#abc", pageIndexWrap);

//!서치바래핑
const searchWrap = tagMaker("div", boardDiv, "searchWrap");
searchWrap.style.padding = "0px 0px";
// positionEditor("relative", "", "0", "", "", searchWrap);
// positionEditor("absolute", "", "0", "", "", searchWrap);
layoutEditor("75%", "5vh", "#ccccff", searchWrap);
felexEditor("flex", "row", "center", "space-around", searchWrap);

//서치바-검색폼
const searchBarForm = tagMaker("form", searchWrap, "searchBarForm");
console.dir(searchBarForm);
formActionSeletor("search", "GET", searchBarForm);
felexEditor("flex", "row", "center", "space-between", searchBarForm);

//서치바-검색폼-셀렉트+옵션
const searchOptionSelect = tagMaker(
  "select",
  searchBarForm,
  "searchOptionSelect"
);
multiTagMaker(
  "option",
  searchOptionSelect,
  Object.keys(tempDataTwenty[0][0]).length
);

function optionValues() {
  for (let i = 0; i < Object.keys(tempDataTwenty[0][0]).length; i++) {
    searchOptionSelect.children[i].value = Object.keys(tempDataTwenty[0][0])[i];
    searchOptionSelect.children[i].textContent = Object.keys(
      tempDataTwenty[0][0]
    )[i];
    //드롭다운 기본 옵션
    if (searchOptionSelect.children[i].value === "subject") {
      searchOptionSelect.children[i].selected = true;
    }
  }
}
optionValues();

//서치바-검색폼-텍스트에어리어
const searchInputText = tagMaker("input", searchBarForm, "searchInputText");

//서치바-검색폼-검색버튼
const searchBtn = tagMaker("input", searchBarForm, "searchBtn");
searchBtn.type = "submit";
searchBtn.value = "검색";

//서치바-글쓰기폼-글쓰기버튼
const createForm = tagMaker("form", searchWrap, "createForm");
console.dir(createForm);
formActionSeletor("createContent", "GET", createForm);
const createSubmit = tagMaker("input", createForm, "createSubmit");
createSubmit.type = "submit";
createSubmit.value = "글쓰기";
