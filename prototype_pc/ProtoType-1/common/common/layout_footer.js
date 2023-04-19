
//footer
const footer = tagMakeCall(root, "div", "", function (element) {
  element.setAttribute("id", "footer");
});

flexMaker(footer, "flex", "row", "start", "center", "100vw", "20vh");
footer.style.backgroundColor = "royalblue";