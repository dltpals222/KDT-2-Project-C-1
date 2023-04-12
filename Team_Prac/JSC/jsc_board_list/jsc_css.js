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
flexMaker(header, "flex", "row", "start", "center", "100vw", "5vh");
header.style.backgroundColor = "royalblue";
//logo css
flexMaker(logo, "flex", "row", "center", "center", "10vw", "100vh");
//menu css
flexMaker(menu, "flex", "row", "flex-start", "center", "60vw", "100vh");

//menu children
for (let i = 0; i < 5; i++) {
  menu.children[i].style.margin = "2vw";
  menu.children[i].style.fontWeight = "bolder";
  menu.children[i].style.fontSize = "20px";
}
//search css
flexMaker(search, "flex", "", "center", "center", "30vw", "100vh");
//search select
flexMaker(search.children[0], "", "", "", "", "4vw", "20px");
//search input
flexMaker(search.children[1], "", "", "", "", "10vw", "15px");
//search button
flexMaker(search.children[2], "", "", "", "", "3vw", "20px");
search.children[2].style.fontWeight = "bold";
//main
flexMaker(main, "flex", "row", "start", "center", "100vw", "75vh");
main.children[0].style.overflow = "auto";
//footer
flexMaker(footer, "flex", "row", "start", "center", "100vw", "20vh");
footer.style.backgroundColor = "royalblue";
