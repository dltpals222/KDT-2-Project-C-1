import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

/* const ids = {
  header : "header",
  b : "string",
  c : 123,
  d : ["string"],
  e : ['array','man','su','mu','gang'],
  f : {id : 'root'},
  g : {id : 'root', class : 'object', type : 'module'},
  // h : //빈칸으로 둘 시 a와 같은 동작을 함
} */
// const root = document.getElementById('root');
// const header = multiAndSingleTagMaker(root, 'div', 'header')
const main = multiAndSingleTagMaker(root, "div", "main");
// const footer = multiAndSingleTagMaker(root, 'div', 'footer')

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
function recipeListadd(num) {
  for (let j = 1; j < num; j++) {
    const recipeListBox = multiAndSingleTagMaker(
      recipeListWrap,
      "div",
      `recipe-list-box-${j}`
    );
    const recipeListImage = multiAndSingleTagMaker(
      recipeListBox,
      "img",
      `recipe-list-image-${j}`
    );
    //레시피 리스트 텍스트 부분
  }
}
recipeListadd(5);

//선택한 이미지 넣기
const recipeListImage1 = recipeListWrap.children[0].children[0].setAttribute(
  "src",
  "https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png"
);
const recipeListImage2 = recipeListWrap.children[1].children[0].setAttribute(
  "src",
  "https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png"
);
const recipeListImage3 = recipeListWrap.children[2].children[0].setAttribute(
  "src",
  "https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png"
);
const recipeListImage4 = recipeListWrap.children[3].children[0].setAttribute(
  "src",
  "https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png"
);

//레시피 설명 텍스트 넣기
const recipeListTextWrap1 = multiAndSingleTagMaker(
  recipeListWrap.children[0],
  "div",
  `recipe-list-text-1`,
  1,
  (element) => {
    element.innerText =
      "레시피 이름 : 꼬리곰탕 \n 필요 재료 : 꼬리, 곰, 물\n 필요 도구 :칼, 냄비, 도마\n 작성자 : 김첨지\n 추천수 : 108\n";
  }
);
const recipeListTextWrap2 = multiAndSingleTagMaker(
  recipeListWrap.children[1],
  "div",
  `recipe-list-text-2`,
  1,
  (element) => {
    element.innerText =
      "레시피 이름 : 꼬리곰탕 \n 필요 재료 : 꼬리, 곰, 물\n 필요 도구 :칼, 냄비, 도마\n 작성자 : 김첨지\n 추천수 : 108\n";
  }
);
const recipeListTextWrap3 = multiAndSingleTagMaker(
  recipeListWrap.children[2],
  "div",
  `recipe-list-text-3`,
  1,
  (element) => {
    element.innerText =
      "레시피 이름 : 꼬리곰탕 \n 필요 재료 : 꼬리, 곰, 물\n 필요 도구 :칼, 냄비, 도마\n 작성자 : 김첨지\n 추천수 : 108\n";
  }
);
const recipeListTextWrap4 = multiAndSingleTagMaker(
  recipeListWrap.children[3],
  "div",
  `recipe-list-text-4`,
  1,
  (element) => {
    element.innerText =
      "레시피 이름 : 꼬리곰탕 \n 필요 재료 : 꼬리, 곰, 물\n 필요 도구 :칼, 냄비, 도마\n 작성자 : 김첨지\n 추천수 : 108\n";
  }
);

//레시피 <<맨앞 <이전 1, 2, 3, 4, 5 다음> 맨뒤>>
const numberListWrap = multiAndSingleTagMaker(main, "div", "number-list-wrap");
// 맨앞
const startNumber = multiAndSingleTagMaker(
  numberListWrap,
  "div",
  "start-number",
  1,
  (element) => {
    element.innerHTML = "<<맨앞";
  }
);
// 이전
const beforeNumber = multiAndSingleTagMaker(
  numberListWrap,
  "div",
  "before-number",
  1,
  (element) => {
    element.innerHTML = "<이전";
  }
);
//1~5번
const number1 = multiAndSingleTagMaker(
  numberListWrap,
  "div",
  "number-1",
  1,
  (element) => {
    element.innerHTML = "1";
  }
);
const number2 = multiAndSingleTagMaker(
  numberListWrap,
  "div",
  "number-2",
  1,
  (element) => {
    element.innerHTML = "2";
  }
);
const number3 = multiAndSingleTagMaker(
  numberListWrap,
  "div",
  "number-3",
  1,
  (element) => {
    element.innerHTML = "3";
  }
);
const number4 = multiAndSingleTagMaker(
  numberListWrap,
  "div",
  "number-4",
  1,
  (element) => {
    element.innerHTML = "4";
  }
);
const number5 = multiAndSingleTagMaker(
  numberListWrap,
  "div",
  "number-5",
  1,
  (element) => {
    element.innerHTML = "5";
  }
);

//다음
const nextNumber = multiAndSingleTagMaker(
  numberListWrap,
  "div",
  "next-number",
  1,
  (element) => {
    element.innerHTML = "다음>";
  }
);
//맨뒤
const endNumber = multiAndSingleTagMaker(
  numberListWrap,
  "div",
  "end-number",
  1,
  (element) => {
    element.innerHTML = "맨뒤>>";
  }
);

//레시피 등록 버튼
const recipeBtnWrap = multiAndSingleTagMaker(
  main,
  "form",
  "recipe-btn-wrap",
  1,
  (ele) => {
    ele.method = "GET";
    ele.action = "recipe_write";
  }
);
const recipeBtn = multiAndSingleTagMaker(
  recipeBtnWrap,
  "button",
  "recipe-btn",
  1,
  (element) => {
    element.innerHTML = "레시피 등록";
  }
);

//root style
// fontAndLayoutEditor(root,"100vw","100vh");

//root style
// fontAndLayoutEditor(header,"100%","25%");

//main style
fontAndLayoutEditor(main, "100%", "");
const mainStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
allMightyStyleEditor(main, mainStyle);

//footer style
// fontAndLayoutEditor(footer,"100%","10%");

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

const recipeListBoxStyle = {
  display: "flex",
  flexDirection: "row",
  width: "70%",
  height: "25%",
  padding: "2%",
  backgroundColor: "#DAB988",
};

//레시피 리스트 이미지 스타일
const recipeListImage = {
  width: "30%",
  height: "100%",
  margin: "2%",
};

for (let a = 0; a < recipeListWrap.children.length; a++) {
  allMightyStyleEditor(recipeListWrap.children[a], recipeListBoxStyle);
  allMightyStyleEditor(recipeListWrap.children[a].children[0], recipeListImage);
}
// (맨처음 이전 1,2,3,4,5 다음 맨끝) 스타일
const numberListWrapStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "80%",
};
allMightyStyleEditor(numberListWrap, numberListWrapStyle);

// 레시피 등록 버튼 스타일
const recipeBtnStyle = {
  width: "100%",
  height: "100%",
  margin: "2%",
};
allMightyStyleEditor(recipeBtn, recipeBtnStyle);
