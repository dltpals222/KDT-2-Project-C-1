import renderButtonContainer from "../module/paging_render_button.js";
import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

const main = multiAndSingleTagMaker(root, "div", "main");

//상세 검색 박스
const advancedSearch = multiAndSingleTagMaker(
  main,
  "div",
  "advanced-search",
  1,
  (element) => {
    element.innerHTML = "상세검색";
  }
);
//레시피 리스트 박스
const recipeListWrap = multiAndSingleTagMaker(main, "div", `recipe-list-wrap`);

//레시피 <<맨앞 <이전 1, 2, 3, 4, 5 다음> 맨뒤>>
const numberListWrap = multiAndSingleTagMaker(
  main,
  "div",
  "number-list-wrap",
  1,
  (element) => {
    fontAndLayoutEditor(element, "100%", "100%");
  }
);

//레시피 등록 버튼
const recipeBtnWrap = multiAndSingleTagMaker(main, "form", "recipe-btn-wrap");
recipeBtnWrap.method = "GET";
recipeBtnWrap.action = "recipe_write";

const recipeBtn = multiAndSingleTagMaker(
  recipeBtnWrap,
  "button",
  "recipe-btn",
  1,
  (element) => {
    element.innerHTML = "레시피 등록";
  }
);

//main style
fontAndLayoutEditor(main, "100%", "");
const mainStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
allMightyStyleEditor(main, mainStyle);

//상세 검색
fontAndLayoutEditor(advancedSearch, "20%", "5%", "1");
const advancedSearchStyle = {
  fontSize: "20px",
  backgroundColor: "#DAB988",
};
allMightyStyleEditor(advancedSearch, advancedSearchStyle);

//레시피 리스트 박스
const recipeListWrapStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "",
  alignItems: "center",
  width: "100%",
  height: "100%",
  margin: "3%",
};
allMightyStyleEditor(recipeListWrap, recipeListWrapStyle);

// 레시피 등록 버튼 스타일
const recipeBtnStyle = {
  width: "100%",
  height: "100%",
  margin: "2%",
};
allMightyStyleEditor(recipeBtn, recipeBtnStyle);

//ajax 를 사용해서 xml을 이용한 정보 교환
const http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    //json 파일에 있는 데이터의 값을 출력
    const data = JSON.parse(http.responseText);
    const dataAll = {
      jsonDataId: data.map((value) => [value.recipe_id]),
      jsonDataTitle: data.map((value) => [value.recipe_title]),
      jsonDataIngredients: data.map((value) => [value.regist_ingredients]),
      jsonDataRegister: data.map((value) => [value.recipe_register]),
      jsonDataRecommend: data.map((value) => [value.recipe_recommend]),
      jsonDataViews: data.map((value) => [value.recipe_views]),
      jsonDataImg: data.map((value) => [value.thumbnail_img]),
    };

    const pageAll = {
      total: data.length, //전체 게시글 갯수
      pageContentCount: 4, //한페이지에 보여질 게시글 갯수
      currPage: 1, //현재페이지
      pageNumCount: 5, //중간 페이징 버튼 갯수
    };

    const numberListWrap = document.getElementById("number-list-wrap");
    const recipeListWrap = document.getElementById("recipe-list-wrap");

    renderButtonContainer(numberListWrap, recipeListWrap, pageAll, dataAll);
  }
};

//db.json 파일 GET방식으로 오픈
http.open("GET", "../JSON/recipe_list_data.json");
http.send();
