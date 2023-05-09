import all_mighty_editor from "./all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

const main = multiAndSingleTagMaker(root, "div", "main");
const stepSection = multiAndSingleTagMaker(main, "div", "step-ection");
// function recipeStepMaker(parent, num) { // 반복문버전
//   for (let i = 0; i < num; i++) {
//     multiAndSingleTagMaker(parent, "div", `box-${i + 1}`, 1, (ele) => {
//       ele.textContent = "";
//       kingGodFlexEditor(ele, "", "", "space-between");
//       multiAndSingleTagMaker(ele, "div", "", 1, (elem) => {
//         elem.textContent = `${i + 1}`;
//       });
//       multiAndSingleTagMaker(ele, "textArea", "", 1, (elem) => {
//         elem.value =
//           "로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 ";
//         elem.name = `step-content-${i}`;
//         fontAndLayoutEditor(elem, "250px", "100px", "", "", "", (eleme) => {
//           eleme.resize = "none";
//         });
//       });
//       multiAndSingleTagMaker(ele, "img", "", 1, (elem) => {
//         elem.textContent = "번호";
//         elem.src =
//           "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png";
//         fontAndLayoutEditor(elem, "150px", "100px");
//       });
//     });
//   }
// }
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
        elem.value =
          "로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 로렘 ";
        elem.name = `step-content-${parent.children.length}`;
        fontAndLayoutEditor(elem, "250px", "100px", "", "", "", (eleme) => {
          eleme.resize = "none";
        });
      });
      multiAndSingleTagMaker(ele, "img", "", 1, (elem) => {
        elem.textContent = "번호";
        elem.src =
          "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png";
        fontAndLayoutEditor(elem, "150px", "100px");
      });
    }
  );
}

let stepNum = 1;

const plusBtn = multiAndSingleTagMaker(main, "input", "plus-btn", 1, (ele) => {
  ele.type = "submit";
  ele.value = "추가";
});
plusBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (stepNum !== 0) {
    recipeStepMaker(stepSection);
    stepNum++;
    console.log(stepNum);
  } else if (stepNum === 1) {
    console.log("div는 1보다 작을 수 없습니다.");
  }
});

// recipeStepMaker(stepSection, stepNum); //반복문 사용
recipeStepMaker(stepSection);

const minusBtn = multiAndSingleTagMaker(
  main,
  "input",
  "minus-btn",
  1,
  (ele) => {
    ele.type = "submit";
    ele.value = "제거";
  }
);
minusBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (stepNum > 1) {
    let tmpDiv = stepSection.lastElementChild;
    stepSection.removeChild(tmpDiv);
    stepNum--;
    console.log(stepNum);
  } else if (stepNum === 1) {
    console.log(`stepNum은 ${stepNum}보다 작을 수 없습니다`);
  }
});
console.dir(stepSection);
