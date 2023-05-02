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



tagMakeCall(noticefooter, "button", "다음",
 function (element) {
  element.setAttribute("id", "right");
});
//main-map
const map = tagMakeCall(main, "div");

tagMakeCall(map, "div", "지도");
tagMakeCall(map, "div");

console.dir(Data);





