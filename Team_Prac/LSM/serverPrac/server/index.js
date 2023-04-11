import { tagMakeCall } from "../modules/tagMakeCall.js";
import classPost from "./classPost.js";

const root = document.getElementById("root");

tagMakeCall(root, "ul", function (element) {
  element.innerHTML = "ul태그 만들기";
});
