
//레시피 순서
const recipeOrder = document.createElement('div');
recipeOrder.style.width = '90%';
recipeOrder.style.height = '80%';
recipeOrder.style.backgroundColor = '#d9d9d9';
//recipeOrder.style.border = '2px solid black';
recipeOrder.style.borderRadius = '10px';
recipeOrder.style.padding = '7px';
mainBody.appendChild(recipeOrder);
recipeOrder.style.display = 'flex';
recipeOrder.style.flexDirection = 'row';
recipeOrder.style.justifyContent = 'space-between';
//레시피 순서안의 설명
const info = document.createTextNode('1)요리를 시작한다');
recipeOrder.appendChild(info);
/*
const info = document.createElement('ol');
for(let i = 0; i < 5; i++){
  const order = document.createElement('li');
  order.style.listStyleType = 'number';
  order.innerText = '요리순서';
  info.appendChild(order);
}
*/
//레시피 순서안의 사진
const innerPic = document.createElement('img');
innerPic.style.width = '40%';
innerPic.style.height = '95%';
innerPic.style.backgroundColor = '#fffeee';
//innerPic.style.border = '2px solid black';
innerPic.style.borderRadius = '10px';
recipeOrder.appendChild(innerPic);