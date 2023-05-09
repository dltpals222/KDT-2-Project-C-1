const require = new XMLHttpRequest();
require.open('GET',);
require.onreadystatechange = function(){
  if(this.readyState == 4){
    const data = JSON.parse(this.response);
    for(let i = 0; i < data.length; i++){
      const div = document.createElement('div');
      div.setAttribute('class','img');
      const img = document.createElement('img');
      img.src = data[i];
      div.appendChild(img);
      document.body.appendChild(div);
    }
  }
}
require.send();