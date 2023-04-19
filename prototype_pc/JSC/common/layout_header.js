const body = document.body;
body.style.margin = "0%";
const root = document.getElementById("root");

function tagMakeCall(parentName, tagName, text, callback) {
  const element = document.createElement(tagName);
  element.textContent = text;
  parentName.appendChild(element);
  if (callback) {
    callback(element);
  }
  return element;
}

/* const rootDiv = tagMakeCall(root, "div", function (element) {
  element.setAttribute("id", "root-div");
  // return document.getElementById('root-div')
}); */
//header
const header = tagMakeCall(root, "div", "", function (element) {
  element.setAttribute("id", "header");
});
const logo = tagMakeCall(header, "div", "로고", function (element) {
  element.setAttribute("id", "logo");
});
const menu = tagMakeCall(header, "div", "", function (element) {
  element.setAttribute("id", "menu");
});
tagMakeCall(menu, "div", "레시피검색");
tagMakeCall(menu, "div", "레시피등록");
tagMakeCall(menu, "div", "커뮤니티");
tagMakeCall(menu, "div", "고객센터");
tagMakeCall(menu, "div", "소개");

const search = tagMakeCall(header, "div", "", function (element) {
  element.setAttribute("id", "search");
});
//search-select
const searchSelect = tagMakeCall(search, "select", "", function (element) {
  element.setAttribute("id", "search-select");
});
const selectOption = tagMakeCall(
  searchSelect,
  "option",
  "레시피",
  function (element) {
    element.setAttribute("value", "recipe");
  }
);
//search-input
const searchInput = tagMakeCall(search, "input", "", function (element) {
  element.setAttribute("id", "search-input");
});
//search-button
const searchButton = tagMakeCall(search, "button", "검색", function (element) {
  element.setAttribute("id", "search-button");
});
//main
const main = tagMakeCall(root, "div", "", function (element) {
  element.setAttribute("id", "main");
});