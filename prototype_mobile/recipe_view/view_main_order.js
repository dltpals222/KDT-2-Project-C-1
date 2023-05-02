
/*
해당페이지의 메인부분에서 요리순서부분을 따로 떼놓아 만든부분임을 감안할 것
*/


//요리순서의 컨테이너를 만들어 요리 상세설명과 사진부분을 디스플레이 플렉스를 사용하여 두 파트로 나눔
const listContainer = document.createElement('div');
listContainer.setAttribute('id','listContainer');
listContainer.style.width = '80%';
listContainer.style.height = '100%';
//listContainer.style.border = '2px solid black';
listContainer.style.borderRadius = '10px';
listContainer.style.display = 'flex';
listContainer.style.flexDirection = 'column';
listContainer.style.justifyContent = 'center';
listContainer.style.alignItems = 'center';
//mainBody.appendChild(listContainer);
main.appendChild(listContainer);

//컨테이너 안에서 요리설명부분
const orderBox = document.createElement('div');
orderBox.setAttribute('id', 'orderBox');
orderBox.style.width = '100%';
orderBox.style.height = '70%';
orderBox.style.border = '1px solid black';
orderBox.style.padding = '10px';
orderBox.style.display = 'flex';
orderBox.style.flexDirection = 'row';
orderBox.style.justifyContent = 'flex-start';
listContainer.appendChild(orderBox);

//요리부분안에서 다시 ol을 만들어 디스플레이 플렉스를 사용하여 세로로 정렬
const orderedList = document.createElement('ol');
orderedList.setAttribute('id','orderInfo');
orderedList.style.width = '100%';
//orderedList.style.height = '50%';
orderedList.style.display = 'flex';
orderedList.style.flexDirection = 'column';
orderBox.appendChild(orderedList);

//요리상세설명부분
for(let i = 0; i < 3; i++){
  const introList = document.createElement('li');
  introList.style.listStyleType = 'square';
  introList.textContent = '1)요리를 합시다.';
  orderedList.appendChild(introList);
}

//요리순서 컨테이너 안에서 요리슌서를 나타낼 사진부분
const orderPic = document.createElement('img');
orderPic.setAttribute('id','orderPic');
orderPic.style.width = '130%';
orderPic.style.height = '50%';
orderPic.style.margin = '0';
orderPic.style.backgroundColor = 'skyblue';
orderPic.style.borderRadius = '10px';
orderBox.appendChild(orderPic);





const footer = document.getElementById('root');
footer.setAttribute('id','footer');
footer.style.width = '100%';
footer.style.height = '50%';
footer.style.border = '2px solid black';
footer.style.display = 'flex';
footer.style.flexDirection = 'center';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
main.appendChild(footer);

const button = document.createElement('button');
button.textContent = '목록';
button.style.textAlign = 'center';
footer.appendChild(button);
