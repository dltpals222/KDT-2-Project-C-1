/*
import all_mighty_editor from "../module/all_mighty_editor.js";

const middleBody = multiAndSingleTagMaker('body','div','main',length,callback);
*/



const mainBody = document.getElementById('main');
//mainBody.style.backgroundColor = 'purple';
mainBody.style.width = '30vw';
mainBody.style.height = '65vh';
mainBody.style.border = '2px solid black';


///제목부분 : 레시피 이름
const title = document.createElement('h2');
title.textContent = '레시피 이름';
title.style.textAlign = 'center';
mainBody.appendChild(title);
//console.dir(mainBody);


//재료 설명 부분
const ingredient = document.createElement('div');
ingredient.style.width = '35%';
ingredient.style.height = '30%';
ingredient.style.border = '2px solid black';
mainBody.appendChild(ingredient);


//사진부분
const pic = document.createElement('img');
pic.style.width = '50%';
pic.style.height = '30%';
pic.style.border = '2px solid black';
mainBody.appendChild(pic);

const recipeOrder = document.createElement('div');
recipeOrder.style.width


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