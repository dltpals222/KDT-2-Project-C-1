export function kingGodFlexEditor(parent,flexDirection,alignItems,justifyContent,callback){
  parent.style.flexDirection = flexDirection;
  parent.style.alignItems = alignItems;
  parent.style.justifyContent = justifyContent;
  parent.style.callback = callback;
}