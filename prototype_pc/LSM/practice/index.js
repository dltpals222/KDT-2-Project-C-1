function tagMake(parent, tagName, num = 1, callback) {
  if (typeof num === "number") {
    for (let i = 0; i < num; i++) {
      const element = document.createElement(tagName);
      parent.appendChild(element);
      if (callback) {
        callback(element, arr, i);
      }
    }
  } else if (typeof num === "undefined") {
    const element = document.createElement(tagName);
    if (callback) {
      callback(element);
    }
    parent.appendChild(element);
    return element;
  } else {
    console.error("3번째 인자는 숫자만 입력가능합니다.");
  }
}

const root = document.getElementById("root");

// const arr = [
//   ["id", "text"],
//   ["id", "add"],
//   ["class", "computer"],
//   ["class", "req"],
// ];

tagMake(root, "div", 4, function (element, arr = "", i) {
  element.setAttribute(arr[i][0], arr[i][1]);
});
