// 요소에 position 속성을 부여하는 함수
// top, bottom, left, right는 object 아래의 변수의 값에 해당
// 그러므로 top, bottom, left, right에 value를 부여하려면
// 해당 변수들을 사용해야 한다.

function superGreatPosition(parent, position, object, zindex, callback) {
  parent.style.position = position;
  parent.style.top = object.top;
  parent.style.bottom = object.bottom;
  parent.style.left = object.left;
  parent.style.right = object.right;
  parent.style.zindex = zindex;

  if (callback) {
    callback(parent);
  }
}

// export default superGreatPosition;

// let PositionSet = {
//   top: "50px",
//   bottom: "300px",
//   left: "500px",
//   right: "30px"
// }


// superGreatPosition(root, "fixed", PositionSet, 0, function (parent) {
//   parent.style.background = "red"
// })
