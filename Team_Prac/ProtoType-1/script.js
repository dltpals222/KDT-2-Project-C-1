const root = document.getElementById("root");
// root.textContent = "아무거나 root"

const tempData = [
  {
    index: 1,
    subject: "첫번째 글",
    content: "로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 ",
    name: "김첨지",
  },
  {
    index: 2,
    subject: "두번째 글",
    content: "로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 ",
    name: "김흥도",
  },
  {
    index: 3,
    subject: "세번째 글",
    content: "로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 ",
    name: "김삿갓",
  },
  {
    index: 4,
    subject: "네번째 글",
    content: "로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 ",
    name: "김폭도",
  },
];

function formActionSeletor(action, method, ele) {
  //form 설정함수
  ele.action = action;
  ele.method = method;
}

function tagMaker(tag, parent, id, callback) {
  //createElement+appendChild 생성기
  const element = document.createElement(tag);
  element.id = id;
  parent.appendChild(element);
  if (callback) {
    callback(element);
  }
  return element;
}

function multiTagMaker(tag, parent, num) {
  //createElement+appendChild 반복생성기
  for (let i = 0; i < num; i++) {
    const element = document.createElement(tag);
    parent.appendChild(element);
  }
}

function felexEditor(display, flexDirection, alignItems, justifyContent, ele) {
  //flex 설정함수
  ele.style.display = display;
  ele.style.flexDirection = flexDirection;
  ele.style.alignItems = alignItems;
  ele.style.justifyContent = justifyContent;
}

function layoutEditor(wid, hei, background, ele) {
  //layout 설정함수
  ele.style.width = wid;
  ele.style.height = hei;
  ele.style.background = background;
}

function positionEditor(position, top, bottom, left, right, ele) {
  //position 설정함수
  ele.style.position = position;
  ele.style.top = top;
  ele.style.bottom = bottom;
  ele.style.left = left;
  ele.style.right = right;
}

felexEditor("flex", "row", "center", "center", document.body); //document.body
layoutEditor("100%", "80vh", "#ffffff", root); //div#root
felexEditor("flex", "row", "center", "center", root);

const boardDiv = tagMaker("div", root, "boardDiv"); //div#boardDiv
positionEditor("relative", "", "", "", "", boardDiv);
layoutEditor("1060px", "680px", "#EEEEEE", boardDiv);
felexEditor("flex", "column", "center", "", boardDiv);

const rowTitle = tagMaker("ul", boardDiv, "rowTitle"); //번호 제목 작성자
rowTitle.style.padding = "10px 0px";
rowTitle.style.borderBottom = "2px black solid";
rowTitle.style.listStyleType = "none";
layoutEditor("75vw", "80px", "", rowTitle);
felexEditor("flex", "row", "end", "space-between", rowTitle);
multiTagMaker("li", rowTitle, 3);
rowTitle.children[0].textContent = "번호";
rowTitle.children[1].textContent = "제목";
rowTitle.children[2].textContent = "작성자";

const contentWrap = tagMaker("div", boardDiv, "contentWrap"); //컨텐트 랩
contentWrap.style.borderBottom = "2px black solid";
layoutEditor("75vw", "", "#ffffff", contentWrap);
felexEditor("flex", "column", "center", "", contentWrap);

const contentUl = tagMaker("ul", contentWrap, "contentUl"); //컨텐트랩-컨텐트UL
contentUl.style.padding = "5px 0px";
layoutEditor("100%", "", "", contentUl);
felexEditor("flex", "column", "", "", contentUl);

function contentFromMaker(parent) {
  //@ 컨텐츠 부분 목록 출력[오름차순]
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
  for (let i = tempData.length - 1; i >= 0; i--) {
    //tempData = 임시객체
    const element = document.createElement("form");
    element.style.padding = "2px 0px";
    element.style.borderBottom = "1px black solid";
    layoutEditor("100%", "", "", element);
    felexEditor("flex", "row", "", "space-between", element);
    parent.appendChild(element);
    const indexP = document.createElement("p");
    indexP.style.paddingLeft = "10px";
    indexP.textContent = tempData[i].index;
    element.appendChild(indexP);
    const subjectP = document.createElement("p");
    subjectP.textContent = tempData[i].subject;
    element.appendChild(subjectP);
    const nameP = document.createElement("p");
    nameP.textContent = tempData[i].name;
    element.appendChild(nameP);
  }
}
contentFromMaker(contentUl);

//서치바래핑
const searchWrap = tagMaker("div", boardDiv, "searchWrap");
searchWrap.style.padding = "0px 20px";
positionEditor("absolute", "", "0", "", "", searchWrap);
layoutEditor("75vw", "5vh", "#ccccff", searchWrap);
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
multiTagMaker("option", searchOptionSelect, Object.keys(tempData[0]).length);

function optionValues() {
  for (let i = 0; i < Object.keys(tempData[0]).length; i++) {
    searchOptionSelect.children[i].value = Object.keys(tempData[0])[i];
    searchOptionSelect.children[i].textContent = Object.keys(tempData[0])[i];
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
