//게시글 예제
export const makeContent = (element, i) => {
  element.innerHTML = `레시피 이름 : ${jsonDataTitle[i - 1]} <br> 
  필요 재료 : ${jsonDataIngredients[i - 1]} <br> 
  작성자 : ${jsonDataRegister[i - 1]}<br> 
  추천수 : ${jsonDataRecommend[i - 1]}<br> 
  조회수 : ${jsonDataViews[i - 1]}<br>`;
};
// export const makeContent = (element, i) => {
//   element.innerHTML = `레시피 이름 : ${jsonDataTitle[i - 1]} <br> 
//   필요 재료 : ${jsonDataIngredients[i - 1]} <br> 
//   작성자 : ${jsonDataRegister[i - 1]}<br> 
//   추천수 : ${jsonDataRecommend[i - 1]}<br> 
//   조회수 : ${jsonDataViews[i - 1]}<br>`;
// };



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
