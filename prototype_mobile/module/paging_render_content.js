import pagingWhileRemove from "./paging_while_removeChild"

//* page는 2가지 타입을 받는다. (숫자, 객체)
//* 숫자를 사용하려면 전역변수로 다음의 변수를 입력해주어야한다.
//* 숫자로 사용할 경우 현재페이지를 적어주면 된다.(모르면 1을 적어주자)
//* 객체를 사용하려면 하나의 객체안에 total과 pageContentCount, currPage를 추가해서 사용하면 된다.
//* for문을 사용하기때문에 callback은 for문의 i를 받는다.

/* 숫자로 사용시 추가해야 할 변수
let total = //전체 게시글 갯수
let pageContentCount = //한페이지에 보여질 게시글 갯수
*/

/* 객체로 사용시 추가해야할 키값 
{
  total : , //전체 게시글 갯수
  pageContentCount : , //한페이지에 보여질 게시글 갯수
  currPage : , //현재페이지
}
*/

//게시글을 포함시킨 renderContent
const renderContent =  (page, parent, callback) => {

  //* 기존에 있던 게시글 삭제 loop
  pagingWhileRemove(parent)


  if(typeof page === 'number'){
    //* 새로운 게시글 작성
    for (
      let i = total - (page-1)*pageContentCount;
      i >= 1 && i > total - page*pageContentCount;
      i --
      ) {callback(i)}
    } else if(typeof page === 'object' && Array.isArray(page) === false){
      for(
        let i = page.total - (page.currPage-1)*page.pageContentCount;
        i >= 1 && i > page.total - page.currPage*page.pageContentCount;
        i --
        ) {callback(i)}
    } else {
      throw console.error('page에는 숫자나 객체가 와야합니다.')
    }
};
