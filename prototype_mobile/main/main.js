import amEditor from "../module/all_mighty_editor.js";

const { multiAndSingleTagMaker, positionEditor, fontAndLayoutEditor, kingGodFlexEditor, allMightyStyleEditor } = amEditor;

// 구조 작성하기
const root = document.getElementById("root");
const header = multiAndSingleTagMaker(root, 'div', 'header');
const headerUp = multiAndSingleTagMaker(header,'div','headerUp')
const headerUpLogin = multiAndSingleTagMaker(headerUp,'input',{ id: 'hul-btn', type: "submit",value : "Login" })
const headerDown = multiAndSingleTagMaker(header,'div','header-Down')
const main = multiAndSingleTagMaker(root, 'div', 'main');
const footer = multiAndSingleTagMaker(root, 'div', 'footer');
const mainTitle = multiAndSingleTagMaker(main, 'div', 'header-wrap');
const mainSearch = multiAndSingleTagMaker(main, 'form', 'header-search');
const mainMenu = multiAndSingleTagMaker(main, 'div', 'main-menu');
const mainSearchSelect = multiAndSingleTagMaker(mainSearch, 'select', 'hs-select')
const mainSearchInput = multiAndSingleTagMaker(mainSearch, 'input', 'hs-input')
const mainSearchEnter = multiAndSingleTagMaker(mainSearch, 'input', { id: 'hs-btn', type: "submit", value : "검색" })
 console.log(root)


// 메인 메뉴의 버튼 하나별 모듈 함수 
function moduleMaker(Num) {
  const menuName = ["레시피 검색", "레시피 등록", "고객센터", "소개"] 
  for (let i = 1; i <= Num; i++) {
    const mainMenuModule = multiAndSingleTagMaker(mainMenu, 'form','mainMenu-module' + i);
    const mainMenuModuleTop = multiAndSingleTagMaker(mainMenuModule, 'input', { id: 'mainMenuModule-top' + i, type: "submit" ,value : " "});
    const mainMenuModuleBottom = multiAndSingleTagMaker(mainMenuModule, 'div', 'mainMenuModuleBottom' + i)
    const mainMenuModuleCss = {
      width: "60px",
      height: "80px",
      margin: "1%",
      fontSize : "10px"
    }

    const mainMenuModuleTopCss = {
      width: "100%",
      height: "70%",
      borderRadius: "20%"
    }

    const mainMenuModuleBottomCss = {
      width: "100%",
      height: "30%"
    }

    allMightyStyleEditor(mainMenuModule, mainMenuModuleCss);
    allMightyStyleEditor(mainMenuModuleTop, mainMenuModuleTopCss)
    allMightyStyleEditor(mainMenuModuleBottom, mainMenuModuleBottomCss,function(element){element.innerHTML = menuName[i-1]})

    kingGodFlexEditor(mainMenuModuleBottom,'row','center','center')
  }
}
// 모듈 함수 호출하기
moduleMaker(4);

const rootCss = {
  width: "100vw",
  height: "100vh"
}

const headerCss = {
  width: "100%",
  height: "35%"
}

const mainCss = {
  width: "100%",
  height: "30%"
}

const footerCss = {
  width: "100%",
  height: "35%"
}

const headerUpCss = {
  width: "100%",
  height: "30%"
}

const headerUpLoginCss = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  margin : "5%"
}

const headerDownCss = {
  width: "100%",
  height: "70%"
}

const mainTitleCss = {
  width: "100%",
  height: "30%",
  fontSize: "40px"
}

const mainSearchCss = {
  width: "100%",
  height: "30%"
}

const mainMenuCss = {
  width: "100%",
  height: "40%",
}

const mainSearchSelectCss = {
  width: "30px",
  height: "30px"
}

const mainSearchInputCss = {
  width: "100px",
  height: "30px"
}

const mainSearchEnterCss = {
  width: "40px",
  height: "30px"
}
// console.dir(root.style)

// 스타일 설정 부분
allMightyStyleEditor(root, rootCss);
allMightyStyleEditor(header, headerCss);
allMightyStyleEditor(headerUp,headerUpCss);
allMightyStyleEditor(headerUpLogin,headerUpLoginCss)
allMightyStyleEditor(headerDown,headerDownCss);
allMightyStyleEditor(main, mainCss);
allMightyStyleEditor(footer, footerCss);
allMightyStyleEditor(mainTitle, mainTitleCss,function (element) { element.innerHTML = "요너두" });
allMightyStyleEditor(mainSearch, mainSearchCss);
allMightyStyleEditor(mainMenu, mainMenuCss);
allMightyStyleEditor(mainSearchSelect, mainSearchSelectCss);
allMightyStyleEditor(mainSearchInput, mainSearchInputCss);
allMightyStyleEditor(mainSearchEnter, mainSearchEnterCss)

// flex 설정 부분
kingGodFlexEditor(headerUp,'row', 'center', 'right')
kingGodFlexEditor(mainTitle,"row", "center", "center");
kingGodFlexEditor(mainSearch,'row', 'center', 'center')
kingGodFlexEditor(mainMenu,'row', 'center', 'center')


