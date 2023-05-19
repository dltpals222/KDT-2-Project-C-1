import all_mighty_editor from "./all_mighty_editor";

const recipeListBox = multiAndSingleTagMaker(
  recipeListWrap,
  "div",
  `recipe-list-box-${i}`,
  1,
  (element) => {
    allMightyStyleEditor(element, recipeListBoxStyle);
  }
);
multiAndSingleTagMaker(
  recipeListBox,
  "img",
  {
    id: `recipe-list-image-${i}`,
    src: "https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png",
  },
  1,
  (element) => {
    allMightyStyleEditor(element, recipeListImage);
  }
);
multiAndSingleTagMaker(
  recipeListBox,
  "div",
  `recipe-list-text-${i}`,
  1,
  (element) => {
    element.innerText = i + "\n" + innerText;
  }
);
