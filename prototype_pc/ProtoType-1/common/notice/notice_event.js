noticefooter.children[0].addEventListener('click',function(){
  for (let i = 0; i < 10; i++) {
    flexMaker(noticemain.children[i], "flex", "row", "center", "center", "100%", "10%");
  
    flexMaker(noticemain.children[i].children[0], "flex", "column", "center", "center", "15%", "100%",function(parent){
      parent.textContent = Data[i].index;
    });
    flexMaker(noticemain.children[i].children[1], "flex", "", "center", "center", "70%", "100%",function(parent){
      parent.textContent = Data[i].subject;
    });
    flexMaker(noticemain.children[i].children[2], "", "", "", "", "15%", "100%",function(parent){
      parent.textContent = Data[i].name;
    });
  }
});

noticefooter.children[1].addEventListener('click',function(){
  for (let i = 0; i < 10; i++) {
    flexMaker(noticemain.children[i], "flex", "row", "center", "center", "100%", "10%");
  
    flexMaker(noticemain.children[i].children[0], "flex", "column", "center", "center", "15%", "100%",function(parent){
      parent.textContent = Data[i+10].index;
    });
    flexMaker(noticemain.children[i].children[1], "flex", "", "center", "center", "70%", "100%",function(parent){
      parent.textContent = Data[i+10].subject;
    });
    flexMaker(noticemain.children[i].children[2], "", "", "", "", "15%", "100%",function(parent){
      parent.textContent = Data[i+10].name;
    });
  }
});