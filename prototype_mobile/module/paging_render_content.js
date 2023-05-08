//게시글을 포함시킨 renderContent
const renderContent =  (page, parent, innerText) => {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }

    for (
      let i = total - (page-1)*pageContentCount;
      i >= 1 && i > total - page*pageContentCount;
      i --
    ) {
      const recipeListBox = multiAndSingleTagMaker(recipeListWrap,'div',`recipe-list-box-${i}`,1,element => {
        allMightyStyleEditor(element, recipeListBoxStyle)
      })
      multiAndSingleTagMaker(recipeListBox,'img',{id : `recipe-list-image-${i}`,src :"https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png" },1,element => {
        allMightyStyleEditor(element, recipeListImage)
      })
      multiAndSingleTagMaker(
          recipeListBox,
          "div",
          `recipe-list-text-${i}`,
          1,
          (element) => {
            element.innerText = i + '\n' + innerText ;
            
          })
    }
    
};