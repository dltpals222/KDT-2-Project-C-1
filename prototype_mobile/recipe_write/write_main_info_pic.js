/*
import all_mighty_editor from "../module/all_mighty_editor.js";

const middleBody = multiAndSingleTagMaker('body','div','main',length,callback);
*/


/*
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

///제목부분 : 레시피 이름
const title = document.createElement('h2');
title.textContent = '레시피 이름';
title.style.textAlign = 'center';
mainBody.appendChild(title);
//console.dir(mainBody);
*/



////////////////////////////////////////////////////////////////////////////////////

const main = document.getElementById('root');
main.setAttribute('id','main');
//main.style.width = '30vw';
//main.style.height = '65vh';
//main.style.width = '330vw';
//main.style.height = '820vh';
main.style.width = '100vw';
main.style.height = '100vh';
main.style.borderRadius = '10px';
//main.style.display = 'grid';
//main.style.gridTemplateRows = '80px';
//main.style.display = 'flex';
//main.style.flexDirection = 'column';

//console.dir(mainBody.children[1]);
//mainBody.children[1].style.backgroundColor = 'red';
//mainBody.children[1].style.flexDirection = 'row';


//제목부분
const title = document.createElement('h2');
title.setAttribute('id','title');
title.textContent = '레시피 이름';
title.style.textAlign = 'center';
main.appendChild(title);


//재료상세부분과 사진첨부부분 컨테이너
const container = document.createElement('div');
container.setAttribute('id','container');
container.style.width = '85%';
container.style.height = '30%';
//container.style.border = '2px solid black';
container.style.borderRadius = '10px';
container.style.padding = '10px';
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.justifyContent = 'space-around';
container.style.alignItems = 'center';
main.appendChild(container);


//재료 설명 부분
const ingredient = document.createElement('div');
ingredient.setAttribute('id','ingredient');
ingredient.style.width = '80%';
ingredient.style.height = '80%';
ingredient.style.margin = '0';
ingredient.style.backgroundColor = '#d9d9d9';
//ingredient.style.border = '2px solid black';
ingredient.style.borderRadius = '10px';
ingredient.style.display = 'flex';
ingredient.style.flexDirection = 'column';
ingredient.style.justifyContent = 'center';
ingredient.style.alignItems = 'center';
container.appendChild(ingredient);
//재료안의 제목부분
const ingredientTitle = document.createElement('h2');
ingredientTitle.setAttribute('id','ingredientTitle');
ingredientTitle.textContent = '재료';
ingredient.appendChild(ingredientTitle);
//재료안의 설명줄부분
/*
const ingredientList = document.createTextNode('재료1, 재료2, 재료3, 기타등등....');
ingredient.appendChild(ingredientList);
ingredientList.style.textAlign = 'justify';
*/

/*
for(let i = 0; i < 3; i++){
  //ingredientList[i].textContent = "재료";
  const ingredientList = document.createElement('li');
  ingredientList.style.listStyleType = 'number';
  ingredientList.style.border = '2px solid black';
  ingredient.appendChild(ingredientList[i]);
}
*/

//const ingredientList = document.createElement('ul');
for(let i = 0; i < 5; i++){
  const ingredientList = document.createElement('li');
  ingredientList.style.listStyleType = 'square';
  ingredientList.style.borderBottom = '2px solid black';
  ingredientList.textContent = '재료';
  ingredient.appendChild(ingredientList);
}

//사진부분
const pic = document.createElement('img');
pic.setAttribute('id','mainPic');
pic.style.width = '80%';
pic.style.height = '80%';
pic.style.margin = '0';
pic.style.backgroundColor = '#fffeee';
//pic.style.border = '2px solid black';
pic.style.borderRadius = '10px';
container.appendChild(pic);

/*
const line = document.querySelector('hr');
line.style.border = '5px solid black';
*/

/*
const main1  = document.createElement('div');
main1.appendChild(mainBody);
const main2 = document.createElement('div');
main2.appendChild(mainBody);
const main3 = document.createElement('div');
main3.appendChild(mainBody);
*/