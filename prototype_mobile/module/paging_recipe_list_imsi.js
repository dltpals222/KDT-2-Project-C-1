import all_mighty_editor from "./all_mighty_editor.js";

const { multiAndSingleTagMaker, allMightyStyleEditor } = all_mighty_editor;

//게시글 예제

/**
 * @param {object} object 객체에는 총 5개의 키값이 있어야 한다. 타이틀, 필요재료, 작성자, 추천수, 조회수
 * @param {number} i i 그대로 적으면 된다.
 * @return {string} element.innerHTML = return내용물
 *
 * * 다음은 return에 대한 예시로 원하는대로 변경 가능
 *
 * >레시피 이름 : ${jsonDataTitle[i - 1]} <br> \
 * 필요 재료 : ${jsonDataIngredients[i - 1]} <br> \
 * 작성자 : ${jsonDataRegister[i - 1]}<br> \
 * 추천수 : ${jsonDataRecommend[i - 1]}<br> \
 * 조회수 : ${jsonDataViews[i - 1]}<br>
 *
 * * 다음은 객체에 대한 예시
 *
 *  >const HTMLObject = {\
 *  jsonDataTitle : jsonDataTitle,\
 *  jsonDataIngredients : jsonDataIngredients,\
 *  jsonDataRegister : jsonDataRegister,\
 *  jsonDataRecommend : jsonDataRecommend,\
 *  jsonDataViews : jsonDataViews\
 *  }
 *
 */
const makeContent = (parent, object, i) => {
  const { jsonDataId, jsonDataTitle, jsonDataIngredients, jsonDataRegister, jsonDataRecommend, jsonDataViews } = object;

  return `<br> <div id=${jsonDataId[i - 1]} style=\"margin-bottom: 1.5%;\">${jsonDataId[i - 1]} </div>
  <div style=\"margin-bottom: 1.5%;\">레시피 이름 : ${jsonDataTitle[i - 1]} </div>
  <div style=\"margin-bottom: 1.5%;\">필요 재료 : ${jsonDataIngredients[i - 1]} </div>
  <div style=\"margin-bottom: 1.5%;\">작성자 : ${jsonDataRegister[i - 1]}</div>
  <div style=\"margin-bottom: 1.5%;\">추천수 : ${jsonDataRecommend[i - 1]}</div>
  <div style=\"margin-bottom: 1.5%;\">조회수 : ${jsonDataViews[i - 1]}</div> `;
};

/**
 *
 * @param {any} parent 부모태그 설정하는 곳
 * @param {string|number|[]|{}} formId form의 아이디를 설정하는 곳
 * @param {string|number|[]|{}} buttonId button의 아이디를 설정하는 곳
 * @param {string} elementValue button에 넣을 텍스트(HTML로 입력된 것으로 HTML문법에 맞게 넣어도 가능!)
 * @returns {void}
 */
const elementButton = (parent, formId, buttonId, elementValue) => {
  multiAndSingleTagMaker(parent, "form", formId, 1, (element) => {
    multiAndSingleTagMaker(element,'input',{type : "hidden", name:"recipe_id", value :elementValue}
    )
    multiAndSingleTagMaker(element, "input", buttonId,);
  });
};

//레시피 리스트 이미지 스타일
const recipeListImageStyle = {
  width: "95%",
  height: "100%",
  margin: "2%",
};

//레시피 리스트 박스 스타일
const recipeListBoxStyle = {
  display: "flex",
  flexDirection: "column",
};

//레시피 리스트 컨테이너 스타일
const recipeListConStyle = {
  width: "70%",
  height: "25%",
  backgroundColor: "#DAB988",
  borderRadius: "2%",
  marginBottom: "2%",
  padding: "2%",
};

/**
 *
 * @param {any} parent 컨텐트의 DOM API 구조를 넣을 부모 위치
 * @param {object} JsonListInfo recipe_list_data.json 정보를 담은 객체
 * @param {number} i i 를 그대로 적으면 된다.
 */
export const listPageDOMApi = (parent, JsonListInfo, i) => {
  console.log(JsonListInfo.jsonDataId[i - 1])
  multiAndSingleTagMaker(parent, "div", `recipe-list-container${i}`, 1, (element) => {
    multiAndSingleTagMaker(element, "form", "", 1, (ele1) => {
      multiAndSingleTagMaker(ele1, "img", { src: JsonListInfo.jsonDataImg[i - 1] }, 1, (ele2) => {
        allMightyStyleEditor(ele2, recipeListImageStyle);
      });
      multiAndSingleTagMaker(ele1, "div", "", 1, (ele2) => {
        ele2.innerHTML = makeContent(ele2, JsonListInfo, i);
        ele2.style.border = 0;
        ele2.style.padding = 0;
      });
      allMightyStyleEditor(ele1, recipeListBoxStyle);
    });
    allMightyStyleEditor(element, recipeListConStyle);
    elementButton(element, {id : "form-update", action : `/liUpdate`, method : "POST"}, {id :"button-update", name : "recipe_id", value : "업데이트", type : 'submit'},JsonListInfo.jsonDataId[i - 1]);
    elementButton(element, {id : "form-delete" , action : `/liDelete`, method : "POST"}, {id :"button-delete", name : "recipe_id", value : "삭제", type : 'submit'},JsonListInfo.jsonDataId[i - 1]);
  });
};
