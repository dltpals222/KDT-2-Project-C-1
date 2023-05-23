/*
import all_mighty_editor from "../module/all_mighty_editor.js";
import recipe_view_table from "../recipe_view/dummy_test_data.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;


const {
  originalIngredients,
  recipeViewIngredient,
  recipeViewRegisterInfo,
  recipeViewCooker,
  recipeViewStep
} = recipe_view_table;
*/

/*
///전체 메인부분
const main = multiAndSingleTagMaker(root,'div','main',1,(ele)=>{
  ele.textContent = '';
});
fontAndLayoutEditor(main, '100vw', '100vh', 1, 'cornflowerblue');
kingGodFlexEditor(main,'column','center','space-evenly');


///조리순서안의 조리방법 또는 내용
const orderInfo = multiAndSingleTagMaker(orderList, 'div', 'orderInfo', 1);
fontAndLayoutEditor(orderInfo, '50%','90%', 1, 'skyblue');
kingGodFlexEditor(orderInfo, 'row', 'center', 'space-evenly');
orderList.appendChild(orderInfo);

///조리순서안의 순서번호 부여한 부분
const sequence = multiAndSingleTagMaker(orderInfo, 'span', 'sequence', 1, (ele)=>{
  ele.textContent = recipeViewStep[1].recipe_step_number;
});
fontAndLayoutEditor(sequence, '15%', '20%', 1 , 'lightgreen');
kingGodFlexEditor(sequence, 'row', 'center', 'center');

///조리순서안의 순서내용 부여한 부분
const syno = multiAndSingleTagMaker(orderInfo, 'span', 'sequence', 1, (ele)=>{
  ele.textContent = recipeViewStep[1].recipe_step_content;
});
fontAndLayoutEditor(syno, '75%', '30%', 1 , 'lightgreen');
kingGodFlexEditor(syno, 'row', 'center', 'center');
*/


const first = (textContent, imgAddress) => {
  multiAndSingleTagMaker(root,"div","",1,ele => {
    multiAndSingleTagMaker(ele,"div","",1,ele => {
      ele.style.width = "100%"
      ele.textContent = textContent
    })
    multiAndSingleTagMaker(ele,"img",{src : imgAddress},1,ele=>{
      
    })
  })
}


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
      ele1.textContent = makeContent(JsonListInfo, i);
      ele1.style.border = 0;
      ele1.style.padding = 0;
    });
    allMightyStyleEditor(element, recipeListBoxStyle);
  });
}
