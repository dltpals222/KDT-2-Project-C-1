/*
import all_mighty_editor from "../module/all_mighty_editor.js";

const middleBody = multiAndSingleTagMaker('body','div','main',length,callback);
*/

const mainBody = document.getElementById('main');
//mainBody.style.backgroundColor = 'purple';
mainBody.style.width = '30vw';
mainBody.style.height = '65vh';
mainBody.style.border = '2px solid black';
mainBody.style.display = 'grid';
mainBody.style.gridTemplateRows = '85px';


///제목부분 : 레시피 이름
const title = document.createElement('h2');
title.textContent = '레시피 이름';
title.style.textAlign = 'center';
mainBody.appendChild(title);
console.dir(mainBody);


//console.dir(mainBody.children[1]);
//mainBody.children[1].style.backgroundColor = 'red';
//mainBody.children[1].style.flexDirection = 'row';

const container = document.createElement('div');
container.style.width = '90%';
container.style.height = '70%';
container.style.border = '2px solid black';
container.style.borderRadius = '10px';
container.style.padding = '7px';
mainBody.appendChild(container);

//재료 설명 부분
const ingredient = document.createElement('div');
ingredient.style.width = '35%';
ingredient.style.height = '85%';
ingredient.style.border = '2px solid black';
ingredient.style.borderRadius = '10px';
ingredient.style.display = 'flex';
ingredient.style.flexDirection = 'column';
ingredient.style.alignItems = 'center';
container.appendChild(ingredient);
//재료안의 제목부분
const ingredientTitle = document.createElement('h3');
ingredientTitle.textContent = '재료';
ingredient.appendChild(ingredientTitle);
//재료안의 설명줄부분
const ingredientList = document.createTextNode('재료1, 재료2, 재료3, 기타등등....');
ingredient.appendChild(ingredientList);
ingredientList.style.textAlign = 'justify';

//사진부분
const pic = document.createElement('img');
pic.style.width = '30%';
pic.style.height = '25%';
pic.style.border = '2px solid black';
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