import all_mighty_editor from "./all_mighty_editor.js";

const {multiAndSingleTagMaker, positionEditor, fontAndLayoutEditor, kingGodFlexEditor, allMightyStyleEditor} = all_mighty_editor

//게시글을 포함시킨 renderContent
const renderContent =  (page, parent, innerText) => {
  let total = 1151;
  let pageContentCount = 4;
  

  //* 기존에 있던 게시글 삭제 loop
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }

  //* 새로운 게시글 작성
  for (
    let i = total - (page-1)*pageContentCount;
    i >= 1 && i > total - page*pageContentCount;
    i --
  ) {
    const ListBox = multiAndSingleTagMaker(parent,'div',`list-box-${i}`,1,element => {
    })
    multiAndSingleTagMaker(ListBox,'img',{id : `list-image-${i}`,src :"https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png" },1,element => {
    })
    multiAndSingleTagMaker(
      ListBox,
      "div",
      `list-text-${i}`,
      1,
      (element) => {
        element.innerText = i + '\n' + innerText ;
        
      })
    }
    
};