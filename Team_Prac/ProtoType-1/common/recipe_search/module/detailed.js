import tagMake from "./tagmake.js";
import styleM from "./style_module.js";

//둘다 마지막은 콜백함수, 콜백함수가 갖고오는 인자는 한개다.
const { styleWHBB, styleDisplay } = styleM;

function detailedSelectOption(parent, title, option) {
  const elementA = document.createElement("div");
  const elementDIV = document.createElement("div");
  const elementSelect = document.createElement("select");

  elementDIV.innerText = title;

  //option 작성방법 [[value1,text1],[value2,text2]......]
  //예시 [['재료','재료'],['hate','기피재료']]
  if (typeof option === "object") {
    for (let i = 0; i < option.length; i++) {
      tagMake(elementSelect, "option", 1, function (element) {
        element.setAttribute("value", option[i][0]);
        element.innerText = option[i][1];
      });
    }
  } else {
    console.error("option은 이중배열이여야 합니다.");
  }

  //style부분
  styleWHBB(elementA, "36%", "");
  styleDisplay(elementA, "flex", "space-evenly", "center");
  styleWHBB(elementDIV, "40%", "25px", "1px solid black");
  styleWHBB(elementSelect, "60%", "27px", "1px solid black");

  //최종적으로 정리하는 부분
  elementA.appendChild(elementDIV);
  elementA.appendChild(elementSelect);
  parent.appendChild(elementA);
}

export default detailedSelectOption;
