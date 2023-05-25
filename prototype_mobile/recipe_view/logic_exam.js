import all_mighty_editor from "../module/all_mighty_editor.js";
import recipe_view_table from "../recipe_view/dummy_test_data.js";
import recipe_Step_Maker from "../module/recipe_step_maker.js";

let order = [];
const orderContainer = document.getElementById('root');
const json = recipe_step.json;
console.log(json);

const sendNumbers = async() => {
  for(let i = 1; i < 1000; i++){
    if(i < 10){
      return `0${i}`;
    }
  else{
    return i;
    }
  }
}

const getInfo = async(id) => {
  const searchRecipes = order.filter()
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

//이미지, 설명 컨테이너 부분
const makeOrdersCard = (innerHTML, imgAddress) => {
  multiAndSingleTagMaker(root,"div",'container',1,(ele) => {
    multiAndSingleTagMaker(container,"div","info",1,(ele) => {
      ele.style.width = "150%";
      ele.style.height = "80%";
      ele.innerHTML = innerHTML;
    })
    multiAndSingleTagMaker(info,"img",{src : imgAddress},1,(ele)=>{
      ele.style.width = "80px";
      ele.style.height = "80px";
      ele.style.margin = "10px";
    })
  })
}

const listPageDOMApi = (parent,JsonListInfo,i) => {
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

