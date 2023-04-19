import tagMake from "./module/tagmake.js";
import detailedSelectOption from "./module/detailed.js";

const main = document.getElementById("main");

//main의 첫번째 태그
const firstTag = {
  parent: main,
  tagName: "div",
  cb: [
    function (element) {
      element.setAttribute("id", "detailed-search");
    },
    function (element) {
      element.setAttribute("id", "recipe-list");
    },
  ],
};

const detailedSearch = tagMake(
  firstTag.parent,
  firstTag.tagName,
  1,
  firstTag.cb[0]
);
const recipeList = tagMake(
  firstTag.parent,
  firstTag.tagName,
  1,
  firstTag.cb[1]
);

//main의 두번째 태그
const dSOp = tagMake(detailedSearch, "div", 1, (element) =>
  element.setAttribute("id", "detailed-sel-opt")
);
const dSea = tagMake(detailedSearch, "div", 1, (element) =>
  element.setAttribute("id", "detailed-search")
);
const dHash = tagMake(detailedSearch, "div", 1, (element) =>
  element.setAttribute("id", "detailed-hashtag")
);
const dSBt = tagMake(detailedSearch, "div", 1, (element) =>
  element.setAttribute("id", "detailed-sch-btn")
);
const dFol = tagMake(detailedSearch, "div", 1, (element) =>
  element.setAttribute("id", "detailed-folding")
);

//dSOp(detailed-select-option)에 모듈로서 생성하기 위한 배열
//추가하려면 title안의 배열과 dOA의 배열안에 하나씩 추가하면 된다. 둘의 갯수는 같아야 된다.
//즉 title.length와 dOA.length의 갯수가 같아야 된다. dOA.children.length가 아님을 주의해야한다.
const selectOptionArr = {
  parent: dSOp,
  title: ["재료", "기피재료", "국가 카테고리", "나머지"],
  dOA: [
    ["고블린의 심장", "고양이의 털", "벼락맞은 복숭아 나뭇가지", "용의 꼬리"],
    ["오거의 눈알", "가고일의 꼬리", "바위골렘의 핵"],
    ["한식", "일식", "중식", "양식"],
    ["실험", "그냥", "입력", "해보는", "거다", "추가", "사항", "넣어", "보자"],
  ],
};

for (let i = 0; i < selectOptionArr.title.length; i++) {
  if (selectOptionArr.title.length === selectOptionArr.dOA.length) {
    detailedSelectOption(
      selectOptionArr.parent,
      selectOptionArr.title[i],
      selectOptionArr.dOA[i]
    );
  } else {
    console.error("title과 dOA안의 배열의 수가 일치하지 않습니다. ");
  }
}
//Search-select-option 끝

//dSea 부분 시작
//dSea 첫번째 태그 생성
const dSeaForm = tagMake(dSea, "form", 1, (element) => {
  element.setAttribute("method", "GET");
});

//dSea 두번째 태그 생성
const dSeaTag = [
  [
    dSeaForm,
    "input",
    1,
    (element) => {
      element.setAttribute("type", "text"),
        element.setAttribute("placeholder", "검색어를 입력해주세요");
    },
  ],
  [
    dSeaForm,
    "button",
    1,
    (element) => {
      element.setAttribute("type", "submit"), (element.innerText = "등록");
    },
  ],
];

for (let i = 0; i < dSeaTag.length; i++) {
  tagMake(dSeaTag[i][0], dSeaTag[i][1], dSeaTag[i][2], dSeaTag[i][3]);
}
//dSea 끝
//dSBt 태그 생성
const dSBtForm = tagMake(dSBt, "form", 1, (element) => {
  element.setAttribute("method", "get");
});
tagMake(dSBtForm, "button", 1, (element) => {
  element.setAttribute("type", "submit");
  element.innerText = "검색";
});
//dSBt 끝
//dFol 태그 생성
tagMake(dFol, "div", 1, (element) => {
  element.innerText = "접기";
  element.addEventListener("click", () => {});
});
//dFol 끝
export default {
  main,
  detailedSearch,
  recipeList,
  dSOp,
  dSea,
  dHash,
  dSBt,
  dFol,
  selectOptionArr,
};
