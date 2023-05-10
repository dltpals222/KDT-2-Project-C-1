import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

const xhr = new XMLHttpRequest();
xhr.open("GET", "db.json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const name = data.map((value)=> [value.b_id,value.name, value.type,value.taek]);
    const root = document.getElementById('root');
    console.log(name)
    root.innerText = JSON.stringify(name);
  }
};
xhr.send();
