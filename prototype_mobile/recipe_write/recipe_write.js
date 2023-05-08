import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

//* div#main
const main = multiAndSingleTagMaker(root, "div", "main", 1, (ele) => {
  ele.textContent = "";
});
//* main form
const mainForm = multiAndSingleTagMaker(main, "form", "main-form");
mainForm.method = "post";
mainForm.action = "result";
// const input = multiAndSingleTagMaker(main, "input", "inputAuto", 1, (ele) => {
//   ele.typeContent = "text";
// });
// input.placeholder = "재료를 입력"; // input의 예시 텍스트

//*레시피 제목 생성
const mainTitleLabel = multiAndSingleTagMaker(
  mainForm,
  "Label",
  "main-title-label",
  1,
  (ele) => {
    ele.textContent = "제목";
  }
);
//* 레시피재료 + 레시피 사진 래핑
const ingredientsImageWrap = multiAndSingleTagMaker(mainForm, "div");
ingredientsImageWrap.textContent = "";
//* 레시피 재료
const registIngredients = multiAndSingleTagMaker(
  ingredientsImageWrap,
  "Lebel",
  "main-ingredients-Label",
  1,
  (ele) => {
    ele.textContent = "레시피 재료";
  }
);
//* 레시피 사진
const registImage = multiAndSingleTagMaker(
  ingredientsImageWrap,
  "Lebel",
  "main-image-label",
  1,
  (ele) => {
    ele.textContent = "레시피 사진";
  }
);

//* 조리 순서 mk1
const registStep = multiAndSingleTagMaker(
  mainForm,
  "div",
  "main-step-label",
  1,
  (ele) => {
    ele.textContent = "조리 순서";
  }
);
//* 등록 버튼
const submitBtn = multiAndSingleTagMaker(
  mainForm,
  "input",
  "input-submit",
  (ele) => {}
);
//*
//*
