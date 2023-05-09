import {pagingWhileRemove} from "./paging_while_removeChild.js"

//* page는 현재 페이지를 적으면 된다. (모르면 1을 적으면 된다.)
//* 전역변수로 다음의 변수를 입력해주어야한다.
//* for문을 사용하기때문에 callback은 for문의 i를 받는다.
//* callback + all_mighty_editor을 사용하여 안의 내용물을 맘대로 바꿔서 넣을 수 있다.

/* 숫자로 사용시 추가해야 할 변수
let total = //전체 게시글 갯수
let pageContentCount = //한페이지에 보여질 게시글 갯수
*/


//게시글을 포함시킨 renderContent
const renderContent =  (parent,page, callback) => {

  //* 기존에 있던 게시글 삭제 loop
  pagingWhileRemove(parent)


    //* 새로운 게시글 작성
    for (
      let i = page.total - (page.currPage-1)*page.pageContentCount;
      i >= 1 && i > page.total - page.currPage*page.pageContentCount;
      i --
      ) {callback(i)}
};

export default renderContent