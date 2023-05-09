import { whileRemoveChild } from "./paging_while_removeChild.js";


//* page는 현재 페이지를 적으면 된다. (모르면 1을 적으면 된다.)
//* 전역변수로 다음의 변수를 입력해주어야한다.
//* for문을 사용하기때문에 callback은 for문의 i를 받는다.
//* callback + all_mighty_editor을 사용하여 안의 내용물을 맘대로 바꿔서 넣을 수 있다.



//게시글을 포함시킨 renderContent
const renderContent =  (parent,page, callback) => {

  //* 기존에 있던 게시글 삭제 loop
  whileRemoveChild(parent)



    //* 새로운 게시글 작성
    for (
      let i = page.total - (page.currPage-1)*page.pageContentCount;
      i > Math.max(0, page.total - page.currPage*page.pageContentCount);
      i --
      ) {callback(i)}
};

export default renderContent