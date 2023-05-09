import {whileRemoveChild} from './paging_while_removeChild.js'
import all_mighty_editor from './all_mighty_editor.js';

//* 버튼을 만들 부모 태그를 넣으면 된다.
//* 전역변수로 4가지를 지정해줘야된다.
/* 안의 숫자들은 임시로 작성한 숫자이다.
let total = 1151; //전체 게시글 갯수
let pageContentCount = 4; //한페이지에 보여질 게시글 갯수
let currPage = 1; //현재페이지
let pageNumCount = 5; //중간 페이징 버튼 갯수
*/


const { multiAndSingleTagMaker, kingGodFlexEditor, fontAndLayoutEditor } = all_mighty_editor

function renderButtons (parent, page) {
  let total = page.total
  let pageContentCount = page.pageContentCount
  let currPage = page.currPage
  let pageNumCount = page.pageNumCount

  const buttonList = multiAndSingleTagMaker(parent, "ul", "button-list",1,element => {
    element.style.listStyleType = 'none'
    kingGodFlexEditor(element, "","center","space-evenly")
    fontAndLayoutEditor(element, "100%",'100%')
  });

  //소수점을 올림처리해주는 함수
  function MathCeil(currPage, pageNumCount = 5) {
    return Math.ceil(currPage / pageNumCount);
  }

  
  //전체 페이지 갯수(밑에 숫자 부분)
  const totalPageCount = MathCeil(total , pageContentCount);

  
  //맨앞 버튼
  const startNumber = multiAndSingleTagMaker(buttonList, "li", "start-number");
  startNumber.innerHTML = "<<맨앞";
  startNumber.addEventListener("click", () => {
    currPage = 1;
    if (MathCeil(currPage) === 1) {
      startNumber.style.visibility = "hidden";
    } else {
      startNumber.style.visibility = "visible";
      currPage = 1;
    }
    renderContent(currPage, recipeListWrap, boxInnerText);
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
    if (MathCeil(currPage) === 1) {
      beforeNumber.style.visibility = "hidden";
    } else {
      beforeNumber.style.visibility = "visible";
      currPage = MathCeil(currPage) * pageNumCount - (pageNumCount - 1);
    }
    renderContent(currPage, recipeListWrap, boxInnerText);
    renderButtons();
  });

  // 중간 페이지 버튼 처리
  let startPage = MathCeil(currPage) * pageNumCount - (pageNumCount - 1);
  let endPage = MathCeil(currPage) * pageNumCount;

  if (startPage < 1) {
    startPage = 1;
    endPage = MathCeil(currPage) * pageNumCount - 1;
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
    const pageButton = multiAndSingleTagMaker(buttonList, "li", i,1,element => {
      fontAndLayoutEditor(element,'8%','')
      kingGodFlexEditor(element,'','center','center')
    });
    pageButton.innerHTML = i;
    if (i === currPage) {
      pageButton.style.fontWeight = "bold" ;
      pageButton.style.backgroundColor = "#9A6E44";
      pageButton.style.color = "white";
    } else {
      pageButton.addEventListener("click", () => {
        currPage = i;
        renderContent(currPage, recipeListWrap, boxInnerText);
        renderButtons();
      });
      pageButton.style.fontWeight = "normal";
      pageButton.style.backgroundColor = "";
      pageButton.style.color = "black";
    }
    buttonList.appendChild(pageButton);
  }

  //다음 버튼
  const nextNumber = multiAndSingleTagMaker(buttonList, "li", "next-number");
  nextNumber.innerHTML = "다음>";
  nextNumber.addEventListener("click", () => {
    currPage = currPage + pageNumCount > total ? total : currPage;
    if (MathCeil(currPage) === MathCeil(totalPageCount)) {
      nextNumber.style.visibility = "hidden";
    } else {
      nextNumber.style.visibility = "visible";
      currPage = MathCeil(currPage) * pageNumCount + 1;
    }
    renderContent(currPage, recipeListWrap, boxInnerText);
    renderButtons();
  });

  //맨뒤 버튼
  const endNumber = multiAndSingleTagMaker(buttonList, "li", "end-number");
  endNumber.innerHTML = "맨뒤>>";
  endNumber.addEventListener("click", () => {
    currPage = total;
    if (MathCeil(currPage) === MathCeil(totalPageCount)) {
      endNumber.style.visibility = "hidden";
    } else {
      endNumber.style.visibility = "visible";
      currPage = totalPageCount;
    }
    renderContent(currPage, recipeListWrap, boxInnerText);
    renderButtons();
  });

  //기존 버튼 삭제 로직
  whileRemoveChild(parent)
  parent.appendChild(buttonList);
};

export default renderButtons