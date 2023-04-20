
function kingGodFlexEditor(parent,flexDirection,alignItems,justifyContent,callback){
  const t = parent.style;
  t.flexDirection = flexDirection;
  t.alignItems = alignItems;
  t.justifyContent = justifyContent;
  //parent.style.callback = callback;
  if(callback){
    callback(t)
  }
}

kingGodFlexEditor(div,row,center,center,'');

export default kingGodFlexEditor;