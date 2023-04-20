function superGreatPosition(parent, position, top, bottom, left, right, zindex, callback) {
  parent.style.position = position;
  parent.style.top = top;
  parent.style.bottom = bottom;
  parent.style.left = left;
  parent.style.right = right;
  parent.style.zindex = zindex;

  if(callback){
    callback(parent);
  }
}

superGreatPosition(root, "fixed", "50px", "300px", "500px", "5px",0, function(parent){
  parent.style.background = "red"
})
