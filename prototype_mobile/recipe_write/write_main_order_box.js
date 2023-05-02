
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




const footer = document.getElementById('root');
footer.setAttribute('id','footer');
footer.style.width = '30%';
footer.style.height = '50%';
footer.style.display = 'flex';
footer.style.flexDirection = 'center';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
main.appendChild(footer);

const button = document.createElement('button');
button.style.width = '20%';
button.style.height = '50%';
button.textContent = '레시피 등록';
button.style.textAlign = 'center';
footer.appendChild(button);