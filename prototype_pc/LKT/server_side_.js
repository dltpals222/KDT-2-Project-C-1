// function getCurrentData(){
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener('readystatechange', function(){
//     if(this.readyState === 4 && this.status === 200){
//       const root = document.getElementById('root');
//       root.innerHTML = this.responseText;
//     }
//   })
//   xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
//   xhr.send();
// }

function getCurrentData() {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (res) {
      if (res.ok) {
        return res.text();
      }
      throw new Error('readState 나 stateCode 상태에 문제가 있습니다.')
    })
    .then(function (date) {
      const root = document.getElementById('root');
      root.innerHTML = date;
    })
    .catch(function (err) {
      console.error("예외처리 방식", err)
    })
};

getCurrentData();


