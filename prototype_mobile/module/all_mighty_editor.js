function allMightyEditor(element, object){
  let elementStyle = element.style
  if (typeof object === "object") {
    for (let i in object) {
      elementStyle[i] = object[i];
    }
  }
  }

export default allMightyEditor