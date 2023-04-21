// 요소에 position 속성을 부여하는 함수
// top, bottom, left, right는 object 아래의 변수의 값에 해당
// 그러므로 top, bottom, left, right에 value를 부여하려면
// 해당 변수들을 사용해야 한다.

function PositionEditor(element, position, zindex, object, callback) {
  const elementStyle = element.style;
  elementStyle.position = position;
  elementStyle.zindex = zindex;
  if (typeof object === "object") {
    for (let i in object) {
      elementStyle[i] = object[i];
    }
  }
  if (callback) {
    callback(elementStyle);
  }
}

export default PositionEditor;

// let PositionSet = {
//   top: "50px",
//   bottom: "300px",
//   left: "500px",
//   right: "30px"
// }


// PositionEditor(root, "fixed", 0, PositionSet, function (element) {
//   element.background = "red"
// })
