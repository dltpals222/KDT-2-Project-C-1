import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

function paging() {
  let pagination = {
    total: 98,
    pageContentCount: 4,
    currPage: 1,
    pageNumCount: 5,
  };
  return pagination;
}

//전체 페이지 갯수
const total = Math.ceil(paging().total / paging().pageContentCount);
//화면에 보여질 페이지 그룹 함수
function currPageGroup(currPage, pageNumCount = 5) {
  return Math.ceil(currPage / pageNumCount);
}

const root = document.getElementById("root");

//root 자식
const boardList = multiAndSingleTagMaker(root, "div", "board-list");
const paginationCtn = multiAndSingleTagMaker(root, "div", "pagination-ctn");

//게시글 예제
const makeContent = (i) => {
  const content = document.createElement("div");
  content.innerHTML = `
      <span>${i}</span>
      <span>게시물 제목</span>
      <span>작성자</span>
      <span>2022.01.01</span>
    `;
  return content;
};

//게시글을 포함시킨 renderContent
const renderContent = (page, parent) => {
  const { total, pageContentCount, currPage, pageNumCount } = paging();
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }

  for (
    let i = (page - 1) * pageContentCount + 1;
    i <= page * pageContentCount && i <= total;
    i++
  ) {
    parent.appendChild(makeContent(i));
  }
};
function pagingFourBtn(currpage) {
  if (currPageGroup(currPage) === 1) {
    beforeNumber.style.visibility = "hidden";
  } else {
    beforeNumber.style.display = "block";
    currPage = 1;
  }
}

const renderButtons = () => {
  const buttonList = multiAndSingleTagMaker(paginationCtn, "ul", "button-list");
  // buttonList.classList.add("pagination");

  let { total, pageContentCount, currPage, pageNumCount } = paging();

  const startNumber = multiAndSingleTagMaker(buttonList, "li", "start-number");
  startNumber.innerHTML = "<<맨앞";
  startNumber.addEventListener("click", () => {
    if (currPageGroup(currPage) === 1) {
      beforeNumber.style.visibility = "hidden";
    } else {
      beforeNumber.style.display = "block";
      currPage = 1;
    }
    renderContent(currPage, boardList);
    renderButtons();
  });

  const beforeNumber = multiAndSingleTagMaker(
    buttonList,
    "li",
    "before-number"
  );
  beforeNumber.innerHTML = "<이전";
  beforeNumber.addEventListener("click", () => {
    if (currPageGroup(currPage) === 1) {
      beforeNumber.style.visibility = "hidden";
    } else {
      beforeNumber.style.display = "block";
      currPage = currPageGroup(currPage) * pageNumCount - (pageNumCount - 1);
    }
    renderContent(currPage, boardList);
    renderButtons();
  });

  const nextButton = multiAndSingleTagMaker(buttonList, "li", "start-number");
  nextButton.innerHTML = "다음>";
  nextButton.addEventListener("click", () => {
    currPage++;
    if (currPage > total) {
      currPage = total;
    }
    renderContent(currPage, boardList);
    renderButtons();
  });

  const lastButton = multiAndSingleTagMaker(buttonList, "li", "start-number");
  lastButton.innerHTML = "끝";
  lastButton.addEventListener("click", () => {
    currPage = total;
    renderContent(currPage, boardList);
    renderButtons();
  });

  buttonList.appendChild(startNumber);
  buttonList.appendChild(beforeNumber);

  // 중간 페이지 버튼 처리
  const halfDisplayPage = Math.floor(pageNumCount / 2);
  let startPage = currPage - halfDisplayPage;
  let endPage = currPage + halfDisplayPage;

  if (startPage < 1) {
    startPage = 1;
    endPage = startPage + pageNumCount - 1;
  }
  if (endPage > total) {
    endPage = total;
    startPage = endPage - pageNumCount + 1;
    if (startPage < 1) {
      startPage = 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = multiAndSingleTagMaker(buttonList, "li", "start-number");
    pageButton.innerHTML = i;
    if (i === currPage) {
      pageButton.classList.add("active");
    } else {
      pageButton.addEventListener("click", () => {
        currPage = i;
        renderContent(currPage, boardList);
        renderButtons();
      });
    }
    buttonList.appendChild(pageButton);
  }

  buttonList.appendChild(nextButton);
  buttonList.appendChild(lastButton);

  const buttonWrapper = document.getElementById("button-wrapper");
  while (buttonWrapper.hasChildNodes()) {
    buttonWrapper.removeChild(buttonWrapper.lastChild);
  }
  buttonWrapper.appendChild(buttonList);
};
