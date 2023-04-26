/*
해당페이지의 메인부분에서 사진과 재료 및 조리기구 설명 부분을 따로 떼놓아 만든부분임을 감안할 것
*/


//메인부분의 전체바디
const mainBody = document.getElementById('main');
//mainBody.style.backgroundColor = 'purple';
mainBody.style.width = '35vw';
mainBody.style.height = '65vh';
//mainBody.style.border = '2px solid black';
mainBody.style.borderRadius = '10px';
//mainBody.style.display = 'grid';
//mainBody.style.gridTemplateRows = '80px';
mainBody.style.display = 'flex';
mainBody.style.flexDirection = 'column';
mainBody.style.justifyContent = 'center';
mainBody.style.alignItems = 'center';
//mainBody.style.padding = '2px';
//mainBody.style.position = 'relative';

//레시피뷰의 사진 부분
const mainPic = document.createElement('img');
mainPic.style.width = '70%';
mainPic.style.height = '80%';
mainPic.style.backgroundColor = 'skyblue';
mainPic.style.borderRadius = '10px';
mainBody.appendChild(mainPic);


//레시피의 이름 제목 부분
const title = document.createElement('h1');
title.textContent = '레시피의 이름';
//title.style.border = '2px solid black';
title.style.margin = '3px';
title.style.padding = '0';
mainBody.appendChild(title);


//재료 설명부분
const ingreInfo = document.createElement('div');
ingreInfo.style.width = '70%';
ingreInfo.style.height = '50%';
const ingreList = document.createElement('ul');
ingreList.style.listStyleType = 'square';
ingreList.textContent = '-재료-';
ingreList.style.textAlign = 'center';
ingreList.style.margin = '20px';
ingreList.style.padding = '0';
mainBody.appendChild(ingreList);
for(let i = 0; i < 5; i++){
  const list = document.createElement('li');
  list.textContent = '용의 꼬리';
  ingreList.appendChild(list);
}


//조리기구 설명부분
const cooker = document.createElement('ul');
cooker.style.listStyleType = 'square';
cooker.textContent = '-조리기구-';
cooker.style.textAlign = 'center';
cooker.style.margin = '0';
cooker.style.padding = '0';
mainBody.appendChild(cooker);
for(let i = 0; i < 5; i++){
  const cookerList = document.createElement('li');
  cookerList.textContent = '후라이팬';
  cooker.appendChild(cookerList);
}