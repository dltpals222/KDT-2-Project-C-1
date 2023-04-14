//main-notice
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

//main-map
const map = tagMakeCall(main, "div");

tagMakeCall(map, "div","지도");
tagMakeCall(map, "div");





