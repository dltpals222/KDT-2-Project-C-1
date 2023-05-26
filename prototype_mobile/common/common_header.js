import amEditor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = amEditor;

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } else {
          reject(new Error(`XHR error! status: ${xhr.status}`));
        }
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
};

const dataPromises = Promise.all([
  fetchData("../api_parse/processed_data_ingredients_table_second.json"),
  fetchData("../JSON/api_processed2.json"),
]);

dataPromises.then(([data1, data2]) => {
  const root = document.getElementById("root");
  const header = multiAndSingleTagMaker(root, "div", "header");
  const fakeHeader = multiAndSingleTagMaker(root, "div", "fakeHeader");
  // const main = multiAndSingleTagMaker(root, 'div', 'main');
  // const footer = multiAndSingleTagMaker(root, "div", "footer");
  const headerWrap = multiAndSingleTagMaker(header, "div", "header-wrap");
  const headerSearch = multiAndSingleTagMaker(header, "form", "header-search");
  const headerSearchWrap = multiAndSingleTagMaker(
    headerSearch,
    "div",
    "header-wrap"
  );
  const headerMenu = multiAndSingleTagMaker(header, "div", "header-menu");
  const headerWrapLeft = multiAndSingleTagMaker(
    headerWrap,
    "div",
    "headerwrap-Left"
  );
  const headerWrapTitle = multiAndSingleTagMaker(
    headerWrap,
    "div",
    "headerwrap-title",
    1,
    (ele) => {
      // ele.onClick = function () {
      //   console.log("hi");
      // };
    }
  );
  headerWrapTitle.addEventListener("click", () => {
    console.log("하이");
    window.location.href = "/";
  });
  const headerWrapLogin = multiAndSingleTagMaker(
    headerWrap,
    "form",
    "headerwrap-Right"
  );
  const headerWrapLoginButton = multiAndSingleTagMaker(
    headerWrapLogin,
    "input",
    {
      id: "hl-btn",
      type: "submit",
      value: "Login",
    }
  );

  const headerSearchSelect = multiAndSingleTagMaker(
    headerSearchWrap,
    "select",
    "hs-select"
  );
  const headerSearchOptionIngredients = multiAndSingleTagMaker(
    headerSearchSelect,
    "option",
    {
      id: "mso-first",
      value: "option1",
    }
  );
  const headerSearchOptionRecipe = multiAndSingleTagMaker(
    headerSearchSelect,
    "option",
    {
      id: "mso-second",
      value: "option2",
    }
  );
  const headerSearchInput = multiAndSingleTagMaker(headerSearchWrap, "input", {
    id: "hs-input",
    type: "text",
    placeholder: "검색어를 입력하세요",
  });
  const headerSearchEnter = multiAndSingleTagMaker(headerSearchWrap, "input", {
    id: "hs-btn",
    type: "submit",
    value: "검색",
  });
  const headerSearchTextWrap = multiAndSingleTagMaker(headerSearch, "div", {
    id: "mst-wrap",
  });
  const headerSearchText = multiAndSingleTagMaker(headerSearchTextWrap, "div", {
    id: "main-search-text",
  });

  console.log(root);
  // menu
  function moduleMaker(Num) {
    const menuName = ["레시피 검색", "레시피 등록", "고객센터", "소개"];
    const getUrl = [
      "recipe_list",
      "recipe_write",
      "recipe_list",
      "recipe_list",
    ];
    for (let i = 1; i <= Num; i++) {
      const headerMenuModule = multiAndSingleTagMaker(
        headerMenu,
        "form",
        "headerMenu-module" + i,
        1,
        (ele) => {
          (ele.method = "GET"), (ele.action = getUrl[i - 1]);
        }
      );
      const headerMenuModuleTop = multiAndSingleTagMaker(
        headerMenuModule,
        "input",
        { id: "headerMenuModule-top" + i, type: "submit", value: " " }
      );
      const headerMenuModuleBottom = multiAndSingleTagMaker(
        headerMenuModule,
        "div",
        "headerMenuModuleBottom" + i
      );
      const headerMenuModuleCss = {
        width: "60px",
        height: "80px",
        margin: "1%",
        fontSize: "10px",
      };

      const headerMenuModuleTopCss = {
        width: "100%",
        height: "70%",
        borderRadius: "20%",
      };

      const headerMenuModuleBottomCss = {
        width: "100%",
        height: "30%",
      };
      allMightyStyleEditor(headerMenuModule, headerMenuModuleCss);

      allMightyStyleEditor(headerMenuModuleTop, headerMenuModuleTopCss);
      allMightyStyleEditor(
        headerMenuModuleBottom,
        headerMenuModuleBottomCss,
        function (element) {
          element.innerHTML = menuName[i - 1];
        }
      );

      kingGodFlexEditor(headerMenuModuleBottom, "row", "center", "center");
    }
  }
  moduleMaker(4);
  kingGodFlexEditor(document.body, "", "", "center");
  const rootCss = {
    // width: "100vw",
    // height: "100vh",
    width: "430px",
    height: "932px",
  };

  const headerCss = {
    // width: "100%",
    width: "inherit",
    height: "25%",
    backgroundColor: "#fff",
  };
  const fakeheaderCss = {
    // width: "100%",
    width: "inherit",
    height: "28%",
    backgroundColor: "#fff",
  };

  const mainCss = {
    width: "100%",
    height: "65%",
  };

  const footerCss = {
    width: "100%",
    height: "10%",
  };

  const headerWrapCss = {
    width: "100%",
    height: "30%",
  };

  const headerSearchCss = {
    width: "100%",
    height: "35%",
  };

  const headerMenuCss = {
    width: "100%",
    height: "40%",
  };

  const headerWrapLeftCss = {
    width: "30%",
    height: "100%",
  };

  const headerWrapTitleCss = {
    width: "40%",
    height: "100%",
    fontSize: "40px",
  };

  const headerWrapLoginCss = {
    width: "30%",
    height: "100%",
  };

  const headerWrapLoginButtonCss = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    margin: "5%",
  };

  const headerSearchSelectCss = {
    width: "65px",
    height: "30px",
  };

  const headerSearchInputCss = {
    width: "150px",
    height: "30px",
  };

  const headerSearchEnterCss = {
    width: "40px",
    height: "30px",
  };
  const headerSearchTextWrapCss = {
    marginLeft: "21px",
    overflow: "auto",
  };
  // console.dir(root.style)

  allMightyStyleEditor(root, rootCss);
  allMightyStyleEditor(header, headerCss);
  allMightyStyleEditor(fakeHeader, fakeheaderCss);
  // allMightyStyleEditor(main, mainCss);
  // allMightyStyleEditor(footer, footerCss);
  allMightyStyleEditor(headerWrap, headerWrapCss);
  allMightyStyleEditor(headerSearch, headerSearchCss);
  allMightyStyleEditor(headerMenu, headerMenuCss);
  allMightyStyleEditor(headerWrapLeft, headerWrapLeftCss);
  allMightyStyleEditor(headerWrapTitle, headerWrapTitleCss, function (element) {
    element.innerHTML = "요너두";
  });

  allMightyStyleEditor(headerWrapLogin, headerWrapLoginCss);
  allMightyStyleEditor(headerWrapLoginButton, headerWrapLoginButtonCss);
  allMightyStyleEditor(headerSearchSelect, headerSearchSelectCss);
  headerSearchOptionIngredients.textContent = "재료";
  headerSearchOptionRecipe.textContent = "레시피";
  allMightyStyleEditor(headerSearchInput, headerSearchInputCss);
  allMightyStyleEditor(headerSearchEnter, headerSearchEnterCss);
  allMightyStyleEditor(headerSearchTextWrap, headerSearchTextWrapCss);

  kingGodFlexEditor(headerWrap, "row", "center", "center");
  kingGodFlexEditor(headerWrapTitle, "row", "center", "center");
  kingGodFlexEditor(headerWrapLogin, "row", "center", "right");
  kingGodFlexEditor(headerSearch, "column", "center", "center");
  kingGodFlexEditor(headerMenu, "row", "center", "center");

  positionEditor(header, "fixed", 1);
  console.dir(root.style);
  // positionEditor(main,'absolute','','',function(element){
  //   element.top = "25%"
  // })
  // positionEditor(footer,'absolute','','',function(element){
  //   element.top = "90%"
  // })

  headerSearchSelect.addEventListener("change", function () {
    const selectedIndex = headerSearchSelect.selectedIndex;
    const selectedOption = headerSearchSelect.options[selectedIndex].value;
    if (selectedOption === "option1") {
      // 입력값이 변경될 때마다 자동완성 기능 실행
      headerSearchInput.addEventListener("input", () => {
        const searchText = headerSearchInput.value.toLowerCase();
        const matchedResults = data1.ingredients
          .filter((item) => item.toLowerCase().includes(searchText))
          .slice(); // 최대 10개의 검색 결과 표시

        // 검색 결과 표시 업데이트
        renderAutocompleteResults(matchedResults);
      });
      // 검색 결과 표시 업데이트하는 함수
      function renderAutocompleteResults(results) {
        headerSearchText.innerHTML = "";

        if (results.length === 0) {
          headerSearchText.style.display = "none";
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
          headerSearchText.appendChild(listItem);

          listItem.addEventListener("mouseover", function () {
            headerSearchInput.value = result;

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
            headerSearchInput.value = result;

            allMightyStyleEditor(
              listItem,
              mainSearchTextItemCss,
              function (element) {
                element.textContent = result;
              }
            );
          });
        });
        kingGodFlexEditor(headerSearchText, "column", "center", "center");
      }
    } else if (selectedOption === "option2") {
      // 입력값이 변경될 때마다 자동완성 기능 실행
      headerSearchInput.addEventListener("input", () => {
        const searchText = headerSearchInput.value.toLowerCase();
        const data2Results = data2.map((value) => value.recipe_title);
        const matchedResults = data2Results
          .filter((item) => item.toLowerCase().includes(searchText))
          .slice();

        // 검색 결과 표시 업데이트
        renderAutocompleteResults(matchedResults);
      });
      // 검색 결과 표시 업데이트하는 함수
      function renderAutocompleteResults(results) {
        headerSearchText.innerHTML = "";

        if (results.length === 0) {
          headerSearchText.style.display = "none";
          return;
        }

        results.forEach((result) => {
          const listItem = document.createElement("div");
          const headerSearchTextItemCss = {
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
            headerSearchTextItemCss,
            function (element) {
              element.textContent = result;
            }
          );
          headerSearchText.appendChild(listItem);

          listItem.addEventListener("mouseover", function () {
            headerSearchInput.value = result;

            const headerSearchTextItemCss = {
              backgroundColor: "black",
              color: "white",
            };
            allMightyStyleEditor(
              listItem,
              headerSearchTextItemCss,
              function (element) {
                element.textContent = result;
              }
            );
          });
          listItem.addEventListener("mouseleave", function () {
            headerSearchInput.value = result;

            allMightyStyleEditor(
              listItem,
              headerSearchTextItemCss,
              function (element) {
                element.textContent = result;
              }
            );
          });
        });
        kingGodFlexEditor(headerSearchText, "column", "center", "center");
      }
    }
  });
});
