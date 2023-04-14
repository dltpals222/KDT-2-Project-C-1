import tagMake from "./tagmake.js";

function detailedSelectOption(parent, title, option) {
  const elementA = document.createElement("div");
  const elementDIV = document.createElement("div");
  const elementSelect = document.createElement("select");

  //option 작성방법 [[value1,text1],[value2,text2]......]
  //예시 [['재료','재료'],['hate','기피재료']]
  elementDIV.innerText = title;
  if (option === "object") {
    for (let i = 0; i < option.length; i++) {
      tagMake(elementSelect, "option", 1, function (element) {
        element.setAttribute("value", option[i][0]);
        element.innerText = option[i][1];
      });
    }
  } else {
    console.error("option은 이중배열이여야 합니다.");
  }

  elementA.appendChild(elementDIV);
  elementA.appendChild(elementSelect);

  parent.appendChild(elementA);
}

export default detailedSelectOption;
