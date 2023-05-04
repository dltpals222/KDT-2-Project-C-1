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
    total: 98, //전체 게시글 갯수
    pageContentCount: 4, //한페이지에 보여질 게시글 갯수
    currPage: 1, //현재페이지
    pageNumCount: 5, //중간 페이징 버튼 갯수
  };
  return pagination;
}

//전체 페이지 갯수
const totalPageCount = Math.ceil(paging().total / paging().pageContentCount);
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

//맨앞 버튼
const renderButtons = () => {
  const buttonList = multiAndSingleTagMaker(paginationCtn, "ul", "button-list");
  // buttonList.classList.add("pagination");

  let { total, pageContentCount, currPage, pageNumCount } = paging();

  const startNumber = multiAndSingleTagMaker(buttonList, "li", "start-number");
  startNumber.innerHTML = "<<맨앞";
  startNumber.addEventListener("click", () => {
    if (currPageGroup(currPage) === 1) {
      startNumber.style.visibility = "hidden";
    } else {
      startNumber.style.visibility = "visible";
      currPage = 1;
    }
    renderContent(currPage, boardList);
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
    if (currPageGroup(currPage) === 1) {
      beforeNumber.style.visibility = "hidden";
    } else {
      beforeNumber.style.visibility = "visible";
      currPage = currPageGroup(currPage) * pageNumCount - (pageNumCount - 1);
    }
    renderContent(currPage, boardList);
    renderButtons();
  });

  // 중간 페이지 버튼 처리
  const halfDisplayPage = Math.floor(pageNumCount / 2);
  console.log(halfDisplayPage, "하프디스플레이페이지");
  let startPage = currPage - halfDisplayPage;
  console.log(startPage, "스타트 페이지");
  let endPage = currPage + halfDisplayPage;
  console.log(endPage, "엔드 페이지");

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
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = multiAndSingleTagMaker(buttonList, "li", i);
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

  //다음 버튼
  const nextNumber = multiAndSingleTagMaker(buttonList, "li", "next-number");
  nextNumber.innerHTML = "다음>";
  nextNumber.addEventListener("click", () => {
    if (currPageGroup(currPage) === currPageGroup(totalPageCount)) {
      nextNumber.style.visibility = "hidden";
    } else {
      nextNumber.style.visibility = "visible";
      currPage = currPageGroup(currPage) * pageNumCount + 1;
    }
    renderContent(currPage, boardList);
    renderButtons();
  });

  //맨뒤 버튼
  const endNumber = multiAndSingleTagMaker(buttonList, "li", "end-number");
  endNumber.innerHTML = "맨뒤>>";
  endNumber.addEventListener("click", () => {
    if (currPageGroup(currPage) === currPageGroup(totalPageCount)) {
      endNumber.style.visibility = "hidden";
    } else {
      endNumber.style.visibility = "visible";
      currPage = total;
    }
    renderContent(currPage, boardList);
    renderButtons();
  });

  while (paginationCtn.hasChildNodes()) {
    paginationCtn.removeChild(paginationCtn.lastChild);
  }
  paginationCtn.appendChild(buttonList);
};

renderContent(paging().currPage, boardList);
renderButtons();
