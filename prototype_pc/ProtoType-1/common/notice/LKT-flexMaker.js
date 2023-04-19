function flexMaker(
  parent, display, flexDirection, justifyContent, alignItems, width, height, callback
) {
  parent.style.display = display;
  parent.style.flexDirection = flexDirection;
  parent.style.justifyContent = justifyContent;
  parent.style.alignItems = alignItems;
  parent.style.width = width;
  parent.style.height = height;
  if (callback) {
    callback(parent);
  }

}