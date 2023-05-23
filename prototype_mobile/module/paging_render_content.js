// import { listPageDOMApi } from "./paging_recipe_list_make_content.js";
import { whileRemoveChild } from "./paging_etc_module.js";
import { listPageDOMApi } from "./paging_recipe_list_imsi.js";

/**
 *
 * @param {any} parent 컨텐트가 생성될 부모의 위치
 * @param {object} param1 객체 (total 필수)
 * @param {object} JsonListInfo json_list_data.json 데이터의 객체
 */
//게시글을 포함시킨 renderContent
const renderContent = (parent, { total, currPage = 1, pageContentCount = 4 }, JsonListInfo) => {
  whileRemoveChild(parent);

  for (let i = total - (currPage - 1) * pageContentCount; i >= 1 && i > total - currPage * pageContentCount; i--) {
    listPageDOMApi(parent, JsonListInfo, i);
  }
};

export default renderContent;
