
//레시피 순서

const recipeOrder = document.createElement('div');
recipeOrder.style.width = '90%';
recipeOrder.style.height = '30%';
recipeOrder.style.backgroundColor = '#d9d9d9';
//recipeOrder.style.border = '2px solid black';
recipeOrder.style.borderRadius = '10px';
recipeOrder.style.padding = '7px';
mainBody.appendChild(recipeOrder);
recipeOrder.style.display = 'flex';
recipeOrder.style.flexDirection = 'row';
recipeOrder.style.justifyContent = 'space-evenly';


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
