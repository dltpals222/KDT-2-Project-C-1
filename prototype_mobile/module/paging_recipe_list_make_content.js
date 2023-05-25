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
const makeContent = (object, i) => {
  const {jsonDataId,jsonDataTitle,jsonDataIngredients,jsonDataRegister,jsonDataRecommend,jsonDataViews} = object

  return  `<br> <div style=\"margin-bottom: 1.5%;\">${jsonDataId[i - 1]} </div>  
  <div style=\"margin-bottom: 1.5%;\">레시피 이름 : ${jsonDataTitle[i - 1]} </div>  
  <div style=\"margin-bottom: 1.5%;\">필요 재료 : ${jsonDataIngredients[i - 1]} </div>  
  <div style=\"margin-bottom: 1.5%;\">작성자 : ${jsonDataRegister[i - 1]}</div>  
  <div style=\"margin-bottom: 1.5%;\">추천수 : ${jsonDataRecommend[i - 1]}</div>  
  <div style=\"margin-bottom: 1.5%;\">조회수 : ${jsonDataViews[i - 1]}</div> `
  
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
  width: "70%",
  height: "25%",
  padding: "2%",
  backgroundColor: "#DAB988",
  borderRadius : '2%',
  marginBottom : '2%',
};

/**
 * 
 * @param {any} parent 컨텐트의 DOM API 구조를 넣을 부모 위치
 * @param {object} JsonListInfo recipe_list_data.json 정보를 담은 객체
 * @param {number} i i 를 그대로 적으면 된다.
 */
export const listPageDOMApi = (parent,JsonListInfo,i) => {
  multiAndSingleTagMaker(parent, "form", "", 1, (element) => {
    multiAndSingleTagMaker(element, "img", { src: JsonListInfo.jsonDataImg[i - 1] }, 1, (ele1) => {
      allMightyStyleEditor(ele1, recipeListImageStyle);
    });
    multiAndSingleTagMaker(element, "div", "", 1, (ele1) => {
      ele1.innerHTML = makeContent(JsonListInfo, i);
      ele1.style.border = 0;
      ele1.style.padding = 0;
    });
    allMightyStyleEditor(element, recipeListBoxStyle);
  });
}