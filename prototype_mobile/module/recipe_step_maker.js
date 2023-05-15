import all_mighty_editor from "./all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

function recipeStepMaker(parent) {
  // 반복문버전
  multiAndSingleTagMaker(
    parent,
    "div",
    `box-${parent.children.length + 1}`,
    1,
    (ele) => {
      ele.textContent = "";
      kingGodFlexEditor(ele, "", "", "space-between");
      multiAndSingleTagMaker(ele, "div", "", 1, (elem) => {
        elem.textContent = `${parent.children.length}`;
      });
      multiAndSingleTagMaker(ele, "textArea", "", 1, (elem) => {
        elem.name = `step-content-${parent.children.length}`;
        elem.placeholder = `ex) 재료를 손질하세요`;
        fontAndLayoutEditor(elem, "250px", "100px", "", "", "", (eleme) => {
          eleme.resize = "none";
          eleme.required = "true";
        });
      });
      multiAndSingleTagMaker(ele, "img", "", 1, (elem) => {
        elem.name = `step-image-${parent.children.length}`;
        elem.src = `http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png`;
        fontAndLayoutEditor(elem, "150px", "100px");
      });
    }
  );
}

export default recipeStepMaker;
