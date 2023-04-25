const mainBody = document.getElementById('main');
//mainBody.style.backgroundColor = 'purple';
mainBody.style.width = '30vw';
mainBody.style.height = '65vh';
//mainBody.style.border = '2px solid black';
mainBody.style.borderRadius = '10px';
//mainBody.style.display = 'grid';
//mainBody.style.gridTemplateRows = '80px';
mainBody.style.display = 'flex';
mainBody.style.flexDirection = 'column';
mainBody.style.justifyContent = 'center';


//레시피뷰의 사진 부분
const mainPic = document.createElement('img');
mainPic.style.width = '70%';
mainPic.style.height = '50%';
container.appendChild(mainBody);

const title = document.createComment('h1');
title.style.border = '2px solid black';
title.textContent = '레시피의 이름';
container.appendChild(mainBody);