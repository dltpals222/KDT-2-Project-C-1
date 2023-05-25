const ingredientData = {
  ingredients: [
    "연두부",
    "칵테일새우",
    "달걀",
    "생크림",
    "설탕",
    "시금치",
    "조선부추",
    "날콩가루",
    "저염간",
    "대파",
    "마늘",
    "고춧가루",
    "요리당",
    "참기름",
    "참깨",
    "방울토마토",
    "양파",
  ],
};

// 자동 완성 기능을 위한 함수
function autoCompleteSearch(input, options) {
  const searchResults = options.filter((option) =>
    option.toLowerCase().startsWith(input.toLowerCase())
  );

  return searchResults;
}

// 예시로 "달"이라는 검색어에 대한 자동 완성 결과를 출력하는 부분
const searchInput = "참";
const searchOptions = ingredientData.ingredients;
const searchResults = autoCompleteSearch(searchInput, searchOptions);

console.log(searchResults);
