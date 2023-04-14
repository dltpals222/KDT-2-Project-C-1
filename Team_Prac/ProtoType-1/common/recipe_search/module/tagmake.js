function tagMake(parent, tagName, num = 1, callback) {
  if (num === 1) {
    const element = document.createElement(tagName);
    if (callback) {
      callback(element);
    }
    parent.appendChild(element);
    return element;
  } else {
    for (let i = 0; i < num; i++) {
      const element = document.createElement(tagName);
      parent.appendChild(element);
    }
  }
}

export default tagMake;
