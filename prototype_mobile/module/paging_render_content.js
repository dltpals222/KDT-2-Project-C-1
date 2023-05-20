import all_mighty_editor from "./all_mighty_editor.js";
import {
  makeContent,
  recipeListBoxStyle,
  recipeListImage,
} from "./paging_recipe_list_make_content.js";
import { whileRemoveChild } from "./paging_etc_module.js";

const { multiAndSingleTagMaker, allMightyStyleEditor } = all_mighty_editor;

//게시글을 포함시킨 renderContent
const renderContent = (
  parent,
  { total, currPage = 1, pageContentCount = 4 },
  JsonListInfo
) => {
  whileRemoveChild(parent);

  for (
    let i = total - (currPage - 1) * pageContentCount;
    i >= 1 && i > total - currPage * pageContentCount;
    i--
  ) {
    multiAndSingleTagMaker(parent, "form", "", 1, (element) => {
      multiAndSingleTagMaker(element, "img", { src: JsonListInfo.jsonDataImg[i - 1] }, 1, (ele1) => {
        allMightyStyleEditor(ele1, recipeListImage);
      });
      multiAndSingleTagMaker(element, "div", "", 1, (ele1) => {
        ele1.innerHTML = makeContent(JsonListInfo, i);
      });
      allMightyStyleEditor(element, recipeListBoxStyle);
    });
  }
};

export default renderContent;
