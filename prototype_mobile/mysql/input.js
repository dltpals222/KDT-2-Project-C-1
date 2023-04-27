import amEditor from "../module/all_mighty_editor.js";

const { multiAndSingleTagMaker, positionEditor, fontAndLayoutEditor, kingGodFlexEditor, allMightyStyleEditor } = amEditor;

const root = document.getElementById('root');

const form = multiAndSingleTagMaker(root,'form','form');
const formInput = multiAndSingleTagMaker(form,'input','form-input');
const formInputButton = multiAndSingleTagMaker(form,'input',{id:'form-input-button',type:'submit'})