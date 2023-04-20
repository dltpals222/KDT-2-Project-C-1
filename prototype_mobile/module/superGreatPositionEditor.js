// 요소에 position 속성을 부여하는 함수
// top, bottom, left, right는 object 아래의 변수의 값에 해당
// 그러므로 top, bottom, left, right에 value를 부여하려면
// 해당 변수들을 사용해야 한다.

function superGreatPosition(element, position, object, zindex, callback) {
  const a = element.style;
  a.position = position;
  a.top = object.top;
  a.bottom = object.bottom;
  a.left = object.left;
  a.right = object.right;
  a.zindex = zindex;

  if (callback) {
    callback(a);
  }
}

export default superGreatPosition;

// let PositionSet = {
//   top: "50px",
//   bottom: "300px",
//   left: "500px",
//   right: "30px"
// }


// superGreatPosition(root, "fixed", PositionSet, 0, function (a) {
//   a.background = "red"
// })
