import renderButtonContainer from "../module/paging_render_button.js";

//ajax 를 사용해서 xml을 이용한 정보 교환
const http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    //json 파일에 있는 데이터의 값을 출력
    const data = JSON.parse(http.responseText);
    const dataAll = {
      jsonDataId : data.map((value)=>[value.recipe_id]),
      jsonDataTitle : data.map((value) => [value.recipe_title]),
      jsonDataIngredients : data.map((value) => [value.regist_ingredients]),
      jsonDataRegister : data.map((value) => [value.recipe_register]),
      jsonDataRecommend : data.map((value) => [value.recipe_recommend]),
      jsonDataViews : data.map((value) => [value.recipe_views]),
      jsonDataImg : data.map((value) => [value.thumbnail_img]),
    }
    
    const pageAll = {
      total : data.length, //전체 게시글 갯수
      pageContentCount : 4, //한페이지에 보여질 게시글 갯수
      currPage : 1, //현재페이지
      pageNumCount : 5, //중간 페이징 버튼 갯수
    }

    const numberListWrap = document.getElementById("number-list-wrap");
    const recipeListWrap = document.getElementById("recipe-list-wrap");

    renderButtonContainer(numberListWrap, recipeListWrap,pageAll,dataAll )

  }
};

//db.json 파일 GET방식으로 오픈
http.open("GET", "../JSON/recipe_list_data.json");
http.send();
