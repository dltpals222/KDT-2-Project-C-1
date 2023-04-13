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
console.log(root.style);
//header css
flexMaker(header, "", "", "", "", "", "5vh");
flexMaker(headerDiv, "flex", "row", "start", "center", "100vw", "5vh");
headerDiv.style.backgroundColor = "royalblue";
headerDiv.style.position = "fixed";
//logo css
flexMaker(logo, "flex", "row", "center", "center", "10%", "100%");
//menu css
flexMaker(menu, "flex", "row", "flex-start", "center", "60%", "100%");

//menu children
for (let i = 0; i < 5; i++) {
  menu.children[i].style.margin = "2%";
  menu.children[i].style.fontWeight = "bolder";
  menu.children[i].style.fontSize = "20px";
}
//search css
flexMaker(search, "flex", "", "center", "center", "30%", "100%");
//search select
flexMaker(search.children[0], "", "", "", "", "15%", "20px");
//search input
flexMaker(search.children[1], "", "", "", "", "30%", "15px");
//search button
flexMaker(search.children[2], "", "", "", "", "10%", "20px");
search.children[2].style.fontWeight = "bold"; 
//main
flexMaker(main, "flex", "row", "start", "center", "100vw", "200vh");
//footer
flexMaker(footer, "flex", "row", "start", "center", "100vw", "20vh");
footer.style.backgroundColor = "royalblue";
