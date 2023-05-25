import amEditor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = amEditor;

const http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    //json 파일에 있는 데이터의 값을 출력
    const data = JSON.parse(http.responseText);
    const dataAll = {
      jsonDataIngredients: data.ingredients.map((value) => [value]),
    };
    // 구조 작성하기
    const root = document.getElementById("root");
    const header = multiAndSingleTagMaker(root, "div", "header");
    const headerUp = multiAndSingleTagMaker(header, "div", "header-up");
    const headerUpLogin = multiAndSingleTagMaker(headerUp, "input", {
      id: "hul-btn",
      type: "submit",
      value: "Login",
    });
    const headerDown = multiAndSingleTagMaker(header, "div", "header-down");
    const main = multiAndSingleTagMaker(root, "div", "main");
    const footer = multiAndSingleTagMaker(root, "div", "footer");
    const mainTitle = multiAndSingleTagMaker(main, "div", "main-title");
    const mainSearch = multiAndSingleTagMaker(main, "form", "main-search");
    const mainMenu = multiAndSingleTagMaker(main, "div", "main-menu");
    const mainSearchWrap = multiAndSingleTagMaker(mainSearch, "div", "ms-wrap");
    const mainSearchSelect = multiAndSingleTagMaker(
      mainSearchWrap,
      "select",
      "ms-select"
    );
    const mainSearchOptionIngredients = multiAndSingleTagMaker(
      mainSearchSelect,
      "option",
      "ms-option"
    );
    const mainSearchOptionRecipe = multiAndSingleTagMaker(
      mainSearchSelect,
      "option",
      "ms-option"
    );
    const mainSearchInput = multiAndSingleTagMaker(mainSearchWrap, "input", {
      id: "ms-input",
      type: "text",
      placeholder: "검색어를 입력하세요",
    });
    const mainSearchEnter = multiAndSingleTagMaker(mainSearchWrap, "input", {
      id: "mse-btn",
      type: "submit",
      value: "검색",
    });
    const mainSearchTextWrap = multiAndSingleTagMaker(mainSearch, "div", {
      id: "mst-wrap",
    });
    const mainSearchText = multiAndSingleTagMaker(mainSearchTextWrap, "div", {
      id: "main-search-text",
    });
    console.log(root);

    // 메인 메뉴의 버튼 하나별 모듈 함수
    function moduleMaker(Num) {
      const menuName = ["레시피 검색", "레시피 등록", "고객센터", "소개"];
      const menuForm = [
        "recipe_list",
        "recipe_write",
        "recipe_list",
        "recipe_list",
      ];
      for (let i = 1; i <= Num; i++) {
        const mainMenuModule = multiAndSingleTagMaker(
          mainMenu,
          "form",
          "main-menu-module" + i,
          1,
          (ele) => {
            ele.method = "GET";
            ele.action = menuForm[i - 1];
          }
        );
        const mainMenuModuleTop = multiAndSingleTagMaker(
          mainMenuModule,
          "input",
          {
            id: "main-menu-module-top" + i,
            type: "submit",
            value: " ",
          }
        );
        const mainMenuModuleBottom = multiAndSingleTagMaker(
          mainMenuModule,
          "div",
          "main-menu-module-bottom" + i
        );
        const mainMenuModuleCss = {
          width: "60px",
          height: "80px",
          margin: "1%",
          fontSize: "10px",
        };

        const mainMenuModuleTopCss = {
          width: "100%",
          height: "70%",
          borderRadius: "20%",
        };

        const mainMenuModuleBottomCss = {
          width: "100%",
          height: "30%",
        };

        allMightyStyleEditor(mainMenuModule, mainMenuModuleCss);
        allMightyStyleEditor(mainMenuModuleTop, mainMenuModuleTopCss);
        allMightyStyleEditor(
          mainMenuModuleBottom,
          mainMenuModuleBottomCss,
          function (element) {
            element.innerHTML = menuName[i - 1];
          }
        );

        kingGodFlexEditor(mainMenuModuleBottom, "row", "center", "center");
      }
    }
    // 모듈 함수 호출하기
    moduleMaker(4);
    kingGodFlexEditor(document.body, "", "", "center");
    const rootCss = {
      width: "430px",
      height: "932px",
      // width: "100vw",
      // height: "100vh",
    };

    const headerCss = {
      width: "100%",
      height: "30%",
    };

    const mainCss = {
      width: "100%",
      height: "45%",
    };

    const footerCss = {
      width: "100%",
      height: "30%",
    };

    const headerUpCss = {
      width: "100%",
      height: "30%",
    };

    const headerUpLoginCss = {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      margin: "5%",
    };

    const headerDownCss = {
      width: "100%",
      height: "70%",
    };

    const mainTitleCss = {
      width: "100%",
      height: "30%",
      fontSize: "40px",
    };

    const mainSearchCss = {
      width: "100%",
      height: "30%",
    };

    const mainMenuCss = {
      width: "100%",
      height: "40%",
    };

    const mainSearchSelectCss = {
      width: "65px",
      height: "30px",
    };

    const mainSearchInputCss = {
      width: "150px",
      height: "30px",
    };

    const mainSearchEnterCss = {
      width: "40px",
      height: "30px",
    };
    const mainSearchTextWrapCss = {
      marginLeft: "21px",
      overflow: "auto",
    };
    /* const mainSearchTextCss = {
  display: "flex",
  flexDirection: "row",
}; */
    // console.dir(root.style)

    // 스타일 설정 부분
    allMightyStyleEditor(root, rootCss);
    allMightyStyleEditor(header, headerCss);
    allMightyStyleEditor(headerUp, headerUpCss);
    allMightyStyleEditor(headerUpLogin, headerUpLoginCss);
    allMightyStyleEditor(headerDown, headerDownCss);
    allMightyStyleEditor(main, mainCss);
    allMightyStyleEditor(footer, footerCss);
    allMightyStyleEditor(mainTitle, mainTitleCss, function (element) {
      element.innerHTML = "요너두";
    });
    allMightyStyleEditor(mainSearch, mainSearchCss);
    allMightyStyleEditor(mainMenu, mainMenuCss);
    allMightyStyleEditor(mainSearchSelect, mainSearchSelectCss);
    mainSearchOptionRecipe.textContent = "레시피";
    mainSearchOptionIngredients.textContent = "재료";
    allMightyStyleEditor(mainSearchInput, mainSearchInputCss);
    allMightyStyleEditor(mainSearchEnter, mainSearchEnterCss);
    allMightyStyleEditor(mainSearchTextWrap, mainSearchTextWrapCss);

    // flex 설정 부분
    kingGodFlexEditor(headerUp, "row", "center", "right");
    kingGodFlexEditor(mainTitle, "row", "center", "center");
    kingGodFlexEditor(mainSearch, "column", "center", "");
    kingGodFlexEditor(mainMenu, "row", "center", "center");

    // 입력값이 변경될 때마다 자동완성 기능 실행
    mainSearchInput.addEventListener("input", () => {
      const searchText = mainSearchInput.value.toLowerCase();
      const matchedResults = data.ingredients
        .filter((item) => item.toLowerCase().includes(searchText))
        .slice(); // 최대 10개의 검색 결과 표시

      // 검색 결과 표시 업데이트
      renderAutocompleteResults(matchedResults);
      console.log(matchedResults);
    });
    // 검색 결과 표시 업데이트하는 함수
    function renderAutocompleteResults(results) {
      mainSearchText.innerHTML = "";

      if (results.length === 0) {
        mainSearchText.style.display = "none";
        return;
      }

      results.forEach((result) => {
        const listItem = document.createElement("div");
        const mainSearchTextItemCss = {
          backgroundColor: "white",
          color: "black",
          width: "150px",
          height: "30px",
          zIndex: "999",
          border: "1px solid black",
          position: "relative",
        };
        allMightyStyleEditor(
          listItem,
          mainSearchTextItemCss,
          function (element) {
            element.textContent = result;
          }
        );
        mainSearchText.appendChild(listItem);

        listItem.addEventListener("mouseover", function () {
          mainSearchInput.value = result;

          const mainSearchTextItemCss = {
            backgroundColor: "black",
            color: "white",
          };
          allMightyStyleEditor(
            listItem,
            mainSearchTextItemCss,
            function (element) {
              element.textContent = result;
            }
          );
        });
        listItem.addEventListener("mouseleave", function () {
          mainSearchInput.value = result;

          allMightyStyleEditor(
            listItem,
            mainSearchTextItemCss,
            function (element) {
              element.textContent = result;
            }
          );
        });
      });
      kingGodFlexEditor(mainSearchText, "column", "center", "center");
    }
  }
};
//db.json 파일 GET방식으로 오픈
http.open("GET", "../api_parse/processed_data_ingredients_table_second.json");
http.send();
