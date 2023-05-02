
//레시피 순서
const recipeOrder = document.createElement('div');
recipeOrder.setAttribute('id','recipeOrder');
recipeOrder.style.width = '90%';
recipeOrder.style.height = '15%';
recipeOrder.style.backgroundColor = '#d9d9d9';
//recipeOrder.style.border = '2px solid black';
recipeOrder.style.borderRadius = '10px';
recipeOrder.style.padding = '7px';
main.appendChild(recipeOrder);
recipeOrder.style.display = 'flex';
recipeOrder.style.flexDirection = 'row';
recipeOrder.style.justifyContent = 'space-between';


/*
function createOrderBox(element, width, height, backgroundColor, borderRadius, padding){
    const box = document.createElement(element);
    box.style = t;
    t.width = width;
    t.height = height;
    t.backgroundColor = backgroundColor;
    t.borderRadius = borderRadius;
    t.padding = padding;
}
*/

/*
const orderBox1 = createOrderBox('div', '90%', '80%', '#d9d9d9', '10px', '7px');
mainBody.appendChild(orderBox1);
const orderBox2 = createOrderBox('div', '90%', '80%', '#d9d9d9', '10px', '7px');
mainBody.appendChild(orderBox2);
*/


//레시피 순서안의 설명
/*
const info = document.createTextNode('1)요리를 시작한다');
recipeOrder.appendChild(info);
*/

const cookOrder = document.createElement('ol');
cookOrder.setAttribute('id','cookOrder');
cookOrder.style.width = '60%';
//orderedList.style.height = '50%';
cookOrder.style.display = 'flex';
cookOrder.style.flexDirection = 'column';
recipeOrder.appendChild(cookOrder);


for(let i = 0; i < 3; i++){
  const introList = document.createElement('li');
  introList.style.listStyleType = 'square';
  introList.textContent = '1)요리를 시작한다.';
  cookOrder.appendChild(introList);
}

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
innerPic.setAttribute('id','orderPic');
innerPic.style.width = '40%';
innerPic.style.height = '100%';
innerPic.style.backgroundColor = '#fffeee';
//innerPic.style.border = '2px solid black';
innerPic.style.borderRadius = '10px';
recipeOrder.appendChild(innerPic);



/*
const buttonContainer = document.getElementById('root');
footer.setAttribute('id','footer');
buttonContainer.style.width = '30%';
buttonContainer.style.height = '50%';
buttonContainer.style.display = 'flex';
buttonContainer.style.flexDirection = 'center';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';
main.appendChild(buttonContainer);
*/

//버튼을 감싸는 컨테이너
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id','buttonContainer');
buttonContainer.style.width = '85%';
buttonContainer.style.height = '10%';
//buttonContainer.style.border = '2px solid black';
buttonContainer.style.padding = '10px';
buttonContainer.style.display = 'flex';
buttonContainer.style.flexDirection = 'row';
buttonContainer.style.justifyContent = 'center';
main.appendChild(buttonContainer);

//레시피등록 버튼부분
const button = document.createElement('button');
button.setAttribute('id','button');
button.style.width = '25%';
button.style.height = '25%';
button.textContent = '레시피 등록';
button.style.textAlign = 'center';
buttonContainer.appendChild(button);