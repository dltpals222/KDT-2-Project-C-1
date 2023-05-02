/*
const footer = document.getElementById('footer');
//footer.style.backgroundColor = 'lightgray';
footer.style.width = '30vw';
footer.style.height = '10vh';
//footer.style.border = '2px solid black';
footer.style.display = 'flex';
footer.style.flexDirection = 'center';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';

const button = document.createElement('button');
button.textContent = '레시피 등록';
button.style.textAlign = 'center';
footer.appendChild(button);
*/

const footer = document.getElementById('root');
footer.setAttribute('id','footer');
footer.style.width = '100vw';
footer.style.height = '100vh';
footer.style.display = 'flex';
footer.style.flexDirection = 'center';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
main.appendChild(footer);

const button = document.createElement('button');
button.textContent = '레시피 등록';
button.style.textAlign = 'center';
footer.appendChild(button);