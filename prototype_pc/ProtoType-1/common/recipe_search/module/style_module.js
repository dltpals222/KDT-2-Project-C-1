function styleWHBB(child, width, height, border, backgroundColor, callback) {
  const childStyle = child.style;
  childStyle.width = width;
  childStyle.height = height;
  childStyle.border = border;
  childStyle.backgroundColor = backgroundColor;
  if (callback) {
    callback(childStyle);
  }
}

function styleDisplay(child, display, justifyContent, alignItems, callback) {
  const childStyle = child.style;
  childStyle.display = display;
  childStyle.justifyContent = justifyContent;
  childStyle.alignItems = alignItems;
  if (callback) {
    callback(childStyle);
  }
}

export default { styleWHBB, styleDisplay };
