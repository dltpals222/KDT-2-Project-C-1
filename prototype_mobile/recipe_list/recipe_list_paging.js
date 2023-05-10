import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  kingGodFlexEditor,
  fontAndLayoutEditor,
  allMightyStyleEditor,
} = all_mighty_editor;
/* 
const http = new XMLHttpRequest();

http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    const firstJsonData = JSON.parse(http.responseText);
    
    // 첫 번째 파일 로드 완료 후, 두 번째 파일을 로드합니다.
    http.open("GET", "secondJsonFile.json");
    http.send();
  }
};

http.open("GET", "firstJsonFile.json");
http.send();

http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    const secondJsonData = JSON.parse(http.responseText);

    // 두 파일 모두 로드 완료 후, 데이터를 처리합니다.
    processJsonData(firstJsonData, secondJsonData);
  }
}; */
//ajax 를 사용해서 xml을 이용한 정보 교환
const http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    //json 파일에 있는 데이터의 값을 출력
    const data = JSON.parse(http.responseText);
    const jsonDataTitle = data.map((value) => [value.recipe_title]);
    const jsonDataIngredients = data.map((value) => [value.regist_ingredients]);
    const jsonDataRegister = data.map((value) => [value.recipe_register]);
    const jsonDataRecommend = data.map((value) => [value.recipe_recommend]);
    const jsonDataViews = data.map((value) => [value.recipe_views]);
    const jsonDataImg = data.map((value) => [value.thumbnail_img]);

    let total = data.length; //전체 게시글 갯수
    let pageContentCount = 4; //한페이지에 보여질 게시글 갯수
    let currPage = 1; //현재페이지
    let pageNumCount = 5; //중간 페이징 버튼 갯수

    //전체 페이지 갯수(밑에 숫자 부분)
    const totalPageCount = Math.ceil(total / pageContentCount);

    //화면에 보여질 페이지 그룹 함수
    function currPageGroup(currPage, pageNumCount = 5) {
      return Math.ceil(currPage / pageNumCount);
    }

    const root = document.getElementById("root");

    //root 자식
    const boardList = multiAndSingleTagMaker(root, "div", "board-list");
    // const paginationCtn = multiAndSingleTagMaker(root, "div", "pagination-ctn");
    const numberListWrap = document.getElementById("number-list-wrap");
    const recipeListWrap = document.getElementById("recipe-list-wrap");

    //게시글을 포함시킨 renderContent
    const renderContent = (page, parent) => {
      while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
      }

      for (
        let i = total - (page - 1) * pageContentCount;
        i >= 1 && i > total - page * pageContentCount;
        i--
      ) {
        const recipeListBox = multiAndSingleTagMaker(
          recipeListWrap,
          "form",
          `recipe-list-box-${i}`,
          1,
          (element) => {
            element.method = "GET";
            element.action = "/";
            multiAndSingleTagMaker(
              element,
              "input",
              { type: "submit" },
              1,
              (ele1) => {
                element.addEventListener("click", () => {
                  ele1.click();
                });
                ele1.style.display = "none";
              }
            );
            //박스 안쪽 텍스트
            //       const boxInnerText = `레시피 이름 : ${jsonDataTitle[i]} \n
            // 필요 재료 : ${jsonDataIngredients[i]} \n
            // 작성자 : ${jsonDataRegister[i]}\n
            // 추천수 : ${jsonDataRecommend[i]}\n
            // 조회수 : ${jsonDataViews[i]}\n`;

            allMightyStyleEditor(element, recipeListBoxStyle);
          }
        );
        multiAndSingleTagMaker(
          recipeListBox,
          "img",
          {
            id: `recipe-list-image-${i}`,
            src: `${jsonDataImg[i - 1]}`,
          },
          1,
          (element) => {
            allMightyStyleEditor(element, recipeListImage);
          }
        );
        multiAndSingleTagMaker(
          recipeListBox,
          "div",
          `recipe-list-HTML-${i}`,
          1,
          (element) => {
            element.innerHTML = `레시피 이름 : ${jsonDataTitle[i - 1]} <br> 
            필요 재료 : ${jsonDataIngredients[i - 1]} <br> 
            작성자 : ${jsonDataRegister[i - 1]}<br> 
            추천수 : ${jsonDataRecommend[i - 1]}<br> 
            조회수 : ${jsonDataViews[i - 1]}<br>`;
          }
        );
      }
    };

    //레시피 리스트 이미지 스타일
    const recipeListImage = {
      width: "30%",
      height: "100%",
      margin: "2%",
    };

    //레시피 리스트 박스 스타일
    const recipeListBoxStyle = {
      display: "flex",
      flexDirection: "row",
      width: "70%",
      height: "25%",
      padding: "2%",
      backgroundColor: "#DAB988",
    };

    //랜더 버튼 함수 시작
    const renderButtons = () => {
      //맨앞 버튼
      const buttonList = multiAndSingleTagMaker(
        numberListWrap,
        "ul",
        "button-list",
        1,
        (element) => {
          element.style.listStyleType = "none";
          kingGodFlexEditor(element, "", "center", "space-evenly");
          fontAndLayoutEditor(element, "100%", "100%");
        }
      );

      const startNumber = multiAndSingleTagMaker(
        buttonList,
        "li",
        "start-number"
      );
      startNumber.innerHTML = "<<맨앞";
      startNumber.addEventListener("click", () => {
        currPage = 1;
        if (currPageGroup(currPage) === 1) {
          startNumber.visibility = "hidden";
        } else {
          startNumber.style.visibility = "visible";
          currPage = 1;
        }
        renderContent(currPage, recipeListWrap);
        renderButtons();
      });

      //이전 버튼
      const beforeNumber = multiAndSingleTagMaker(
        buttonList,
        "li",
        "before-number"
      );
      beforeNumber.innerHTML = "<이전";
      beforeNumber.addEventListener("click", () => {
        currPage = currPage - pageNumCount < 1 ? 1 : currPage - pageNumCount;
        if (currPageGroup(currPage) === 1) {
          beforeNumber.style.visibility = "hidden";
        } else {
          beforeNumber.style.visibility = "visible";
          currPage =
            currPageGroup(currPage) * pageNumCount - (pageNumCount - 1);
        }
        renderContent(currPage, recipeListWrap);
        renderButtons();
      });

      // 중간 페이지 버튼 처리
      let startPage =
        currPageGroup(currPage) * pageNumCount - (pageNumCount - 1);
      let endPage = currPageGroup(currPage) * pageNumCount;

      if (startPage < 1) {
        startPage = 1;
        endPage = currPageGroup(currPage) * pageNumCount - 1;
      }
      if (endPage > total) {
        endPage = total;
        startPage = endPage - pageNumCount + 1;
        if (startPage < 1) {
          startPage = 1;
        }
      }

      //중간 페이지 버튼 반복문
      for (let i = startPage; i <= endPage && i <= totalPageCount; i++) {
        //페이지 숫자 버튼 CSS포함시킴
        const pageButton = multiAndSingleTagMaker(
          buttonList,
          "li",
          i,
          1,
          (element) => {
            fontAndLayoutEditor(element, "8%", "");
            kingGodFlexEditor(element, "", "center", "center");
          }
        );
        pageButton.innerHTML = i;
        if (i === currPage) {
          pageButton.style.fontWeight = "bold";
          pageButton.style.backgroundColor = "#9A6E44";
          pageButton.style.color = "white";
        } else {
          pageButton.addEventListener("click", () => {
            currPage = i;
            renderContent(currPage, recipeListWrap);
            renderButtons();
          });
          pageButton.style.fontWeight = "normal";
          pageButton.style.backgroundColor = "";
          pageButton.style.color = "black";
        }
        buttonList.appendChild(pageButton);
      }

      //다음 버튼
      const nextNumber = multiAndSingleTagMaker(
        buttonList,
        "li",
        "next-number"
      );
      nextNumber.innerHTML = "다음>";
      nextNumber.addEventListener("click", () => {
        currPage = currPage + pageNumCount > total ? total : currPage;
        if (currPageGroup(currPage) === currPageGroup(totalPageCount)) {
          nextNumber.style.visibility = "hidden";
        } else {
          nextNumber.style.visibility = "visible";
          currPage = currPageGroup(currPage) * pageNumCount + 1;
        }
        renderContent(currPage, recipeListWrap);
        renderButtons();
      });

      //맨뒤 버튼
      const endNumber = multiAndSingleTagMaker(buttonList, "li", "end-number");
      endNumber.innerHTML = "맨뒤>>";
      endNumber.addEventListener("click", () => {
        currPage = total;
        if (currPageGroup(currPage) === currPageGroup(totalPageCount)) {
          endNumber.style.visibility = "hidden";
        } else {
          endNumber.style.visibility = "visible";
          currPage = totalPageCount;
        }
        renderContent(currPage, recipeListWrap);
        renderButtons();
      });

      //기존 버튼 삭제 로직
      while (numberListWrap.hasChildNodes()) {
        numberListWrap.removeChild(numberListWrap.lastChild);
      }
      numberListWrap.appendChild(buttonList);
    };
    renderContent(currPage, recipeListWrap);
    renderButtons();
  }
};

//db.json 파일 GET방식으로 오픈
http.open("GET", "../JSON/recipe_list_data.json");
http.send();
