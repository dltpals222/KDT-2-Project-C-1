//게시글 예제

/**
 * * @param {object} object - 객체에는 총 5개의 키값이 있어야 한다. 타이틀, 필요재료, 작성자, 추천수, 조회수
 * * @param {number} i - i 그대로 적으면 된다.
 * * @return {string} - 문자열로 나옴
 * 
 * >레시피 이름 : ${jsonDataTitle[i - 1]} <br> \
 * 필요 재료 : ${jsonDataIngredients[i - 1]} <br> \
 * 작성자 : ${jsonDataRegister[i - 1]}<br> \
 * 추천수 : ${jsonDataRecommend[i - 1]}<br> \
 * 조회수 : ${jsonDataViews[i - 1]}<br> 
 * 
 * * 다음은 객체에 대한 예시입니다.
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

export const makeContent = (object, i) => {
  const {jsonDataId,jsonDataTitle,jsonDataIngredients,jsonDataRegister,jsonDataRecommend,jsonDataViews} = object

  return  `${jsonDataId[i - 1]} <br> 
  레시피 이름 : ${jsonDataTitle[i - 1]} <br> 
  필요 재료 : ${jsonDataIngredients[i - 1]} <br> 
  작성자 : ${jsonDataRegister[i - 1]}<br> 
  추천수 : ${jsonDataRecommend[i - 1]}<br> 
  조회수 : ${jsonDataViews[i - 1]}<br>`
  
};

//레시피 리스트 이미지 스타일
export const recipeListImage = {
  width: "30%",
  height: "100%",
  margin: "2%",
};

//레시피 리스트 박스 스타일
export const recipeListBoxStyle = {
  display: "flex",
  flexDirection: "row",
  width: "70%",
  height: "25%",
  padding: "2%",
  backgroundColor: "#DAB988",
};
