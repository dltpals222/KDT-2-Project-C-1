import style_module from "./module/style_module.js";
import layoutIds from "./layout_recipe_search.js";

//둘다 마지막은 콜백함수, 콜백함수가 갖고오는 인자는 한개다.
const { styleWHBB, styleDisplay } = style_module;

//layout_recipe_search에서 사용된 id들
const {
  main,
  detailedSearch,
  recipeList,
  dSOp,
  dSea,
  dHash,
  dSBt,
  dFol,
  selectOptionArr,
} = layoutIds;

//첫번째 태그 CSS모음
styleWHBB(detailedSearch, "1536px", "308px", "1px solid black");

//두번째 태그 CSS모음
const secondDp = [
  [
    dSOp,
    "grid",
    "",
    "",
    function (element) {
      element.gridTemplateRows = `repeat(${Math.ceil(
        selectOptionArr.title.length / 2
      )},1fr)`;
      element.gridTemplateColumns = `repeat(2,1fr)`;
    },
  ],
];
const secondWHBB = [[dSOp, "100%", "", "1px solid red"]];

for (let i = 0; i < secondDp.length; i++) {
  styleDisplay(
    secondDp[i][0],
    secondDp[i][1],
    secondDp[i][2],
    secondDp[i][3],
    secondDp[i][4]
  );
}
for (let i = 0; i < secondWHBB.length; i++) {
  styleWHBB(
    secondWHBB[i][0],
    secondWHBB[i][1],
    secondWHBB[i][2],
    secondWHBB[i][3],
    secondWHBB[i][4]
  );
}
//두번째 CSS 끝
