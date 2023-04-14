import tagMake from "./module/tagmake.js";
import detailedSelectOption from "./module/detailed.js";
import styleM from "./module/style_module.js";

//둘다 마지막은 콜백함수, 콜백함수가 갖고오는 인자는 한개다.
const { styleWHBB, styleDisplay } = styleM;

const main = document.getElementById("main");

//첫번째 태그
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
styleWHBB(detailedSearch, "80%", "30%", "1px solid black");
const recipeList = tagMake(
  firstTag.parent,
  firstTag.tagName,
  1,
  firstTag.cb[1]
);

//두번째 태그
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
const dOA = [
  ["ingredients", "재료"],
  ["hate", "기피재료"],
  ["cookingMethod", "조리방식"],
];
detailedSelectOption(dSOp, "실험용", dOA);
