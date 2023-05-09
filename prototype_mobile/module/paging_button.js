//! 일단 보류함


import all_mighty_editor from "./all_mighty_editor.js";
import paging_while_removeChild from "./paging_while_removeChild.js";

const {MathCeil} = paging_while_removeChild
const {multiAndSingleTagMaker}  = all_mighty_editor

  function pagingButton(){
    const pagBtn = multiAndSingleTagMaker(buttonList, "li");
    let currPage = page.currPage + page.pageNumCount > page.total ? page.total : page.currPage;
    pagBtn.innerHTML = "다음>";
    pagBtn.addEventListener("click", () => {
      if (MathCeil(currPage) === MathCeil(totalPageCount)) {
        pagBtn.style.visibility = "hidden";
    } else {
      pagBtn.style.visibility = "visible";
      currPage = MathCeil(currPage) * pageNumCount + 1;
    }
    renderContent(currPage, recipeListWrap, boxInnerText);
    renderButtons();
  });
}