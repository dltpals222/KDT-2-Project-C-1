const b_id_submit = document.getElementById('b_id_submit');
const b_id = document.getElementById('b_id');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');

// b_id_submit 버튼을 눌렀을 때 id의 input의 value값에 해당된 id에 따른 row 값들이 출력되도록 하는 로직
b_id_submit.addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "db.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const name = data.map((value) => [value.b_id, value.name, value.type, value.taek]);
      const root = document.getElementById('dog');
      for (let i = 0; i < name.length; i++) {
        if (Number(b_id.value) === name[i][0]) {
          a.value = name[i][1];
          b.value = name[i][2];
          c.value = name[i][3];
          d.value = name[i][0];
        }
      }
      root.innerHTML = JSON.stringify(name);
    }
  };
  xhr.send();
})