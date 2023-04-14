//header css
flexMaker(header, "flex", "row", "center", "center", "100vw", "5vh");
flexMaker(headerDiv, "flex", "row", "center", "center", "100vw", "5vh", function (parent) {
  parent.style.backgroundColor = "royalblue";
  parent.style.position = "fixed";
});
//logo css
flexMaker(logo, "flex", "row", "center", "center", "10%", "100%");
//menu css
flexMaker(menu, "flex", "row", "flex-start", "center", "60%", "100%",
  function (parent) {
    for (let i = 0; i < 5; i++) {
      parent.children[i].style.margin = "2%";
      parent.children[i].style.fontWeight = "bolder";
      parent.children[i].style.fontSize = "20px";
    }
  });

//search css
flexMaker(search, "flex", "", "center", "center", "30%", "100%");
//search select
flexMaker(search.children[0], "", "", "", "", "15%", "20px");
//search input
flexMaker(search.children[1], "", "", "", "", "30%", "20px");
//search button
flexMaker(search.children[2], "", "", "", "", "10%", "20px", function (parent) {
  parent.style.fontWeight = "bold";
});

// -----------------여기서부터 main----------

//main
flexMaker(main, "flex", "row", "center", "center", "100vw", "100vh");
//footer
flexMaker(footer, "flex", "row", "start", "center", "100vw", "20vh", function (parent) {
  parent.style.backgroundColor = "royalblue";
});
//main_notice
flexMaker(notice, "flex", "column", "center", "center", "50%", "100%");
// main-map
flexMaker(map, "flex", "column", "center", "center", "50%", "100%")
// notice style
flexMaker(noticeheader, "flex", "", "center", "center", "80%", "10%", function (parent) {
  parent.style.fontSize = "30px";
});
flexMaker(noticemain, "flex", "column", "center", "center", "80%", "70%");
flexMaker(noticefooter, "flex", "", "center", "center", "80%", "10%");






// ------------여기서 부터 map---------


// map style
flexMaker(map.children[0], "flex", "", "center", "center", "80%", "10%", function (parent) {
  parent.style.fontSize = "30px"
});
flexMaker(map.children[1], "", "", "", "", "80%", "80%");

