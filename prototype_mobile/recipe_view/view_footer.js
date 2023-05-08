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
button.textContent = '목록';
button.style.textAlign = 'center';
footer.appendChild(button);