const notice = tagMakeCall(main, "div");
//main-notice-header
const noticeheader = tagMakeCall(notice, "div", "공지사항");
// main-notice-main
const noticemain = tagMakeCall(notice, "div");
for (let i = 0; i < 10; i++) {
  tagMakeCall(noticemain, 'div');
  for (let j = 0; j < 3; j++) {
    tagMakeCall(noticemain.children[i], 'div');
  }
}
// main-notice-footer
const noticefooter = tagMakeCall(notice, "div");
tagMakeCall(noticefooter, "button", "이전",
 function (element) {
  element.setAttribute("id", "left");
});

//test.js 데이터 가공
// const noticeArray = [];
// noticeArray.push(Data);
// console.log(noticeArray);
function noticeSlice(){
  for(let i = 0; i < Data.length; i+=10){
    const count = 0;
    const sliceArray = Data.slice(i,i+10);
    console.log(sliceArray);
  }
}
noticeSlice();

//noticemain에 값넣기
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

tagMakeCall(noticefooter, "button", "다음",
 function (element) {
  element.setAttribute("id", "right");
});
//main-map
const map = tagMakeCall(main, "div");

tagMakeCall(map, "div", "지도");
tagMakeCall(map, "div");

console.dir(Data);





