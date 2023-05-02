function flexMaker(
  parent,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  width,
  height
) {
  parent.style.display = display;
  parent.style.flexDirection = flexDirection;
  parent.style.justifyContent = justifyContent;
  parent.style.alignItems = alignItems;
  parent.style.width = width;
  parent.style.height = height;
}
//main
main.style.padding = "1%";
//main wrapp
flexMaker(mainWrapp, "flex", "column", "start", "center", "100%", "100%");

//제일위 상단 recipe main image
flexMaker(recipeImage, "", "", "", "", "", "");
recipeImage.children[0].style.width = "150px";
recipeImage.children[0].style.height = "100px";
//가운데 레시피 이름
flexMaker(recipeName, "flex", "column", "start", "center", "100%", "15%");
recipeName.style.padding = "2%";
flexMaker(recipeName.children[1], "flex", "row", "center", "", "100%", "20%");

//recipeName 가운데
//재료: (재료목록) ㅣ (재료목록)
for (
  let reciNameStyle = 0;
  reciNameStyle < recipeName.children[1].children.length;
  reciNameStyle++
) {
  recipeName.children[1].children[reciNameStyle].style.margin = "0.5%";
}
recipeName.children[1].children[2].style.background = "black";
recipeName.children[1].children[2].style.width = "5px";
recipeName.children[1].children[2].style.height = "50px";

//상세 조리 방법
flexMaker(recipeCooking, "flex", "column", "start", "center", "100%", "70%");

for (let a = 0; a < recipeCookingMethod.children.length; a++) {
  flexMaker(
    recipeCookingMethod.children[a],
    "flex",
    "row",
    "space-between",
    "",
    "350px",
    "15%"
  );
  recipeCookingMethod.children[a].style.border = "1px solid black";
}
//상세 조리방법 text
//상세 조리방법 이미지
recipeCookingMethod_1.style.width = "130px";
recipeCookingMethod_2.style.width = "130px";
recipeCookingMethod_3.style.width = "130px";
recipeCookingMethod_4.style.width = "130px";
recipeCookingMethod_5.style.width = "130px";

recipeCookingMethod_1.style.height = "100%";
recipeCookingMethod_2.style.height = "100%";
recipeCookingMethod_3.style.height = "100%";
recipeCookingMethod_4.style.height = "100%";
recipeCookingMethod_5.style.height = "100%";
