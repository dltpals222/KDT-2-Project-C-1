//border 값을 "1"로주면 "1px solid black"
// 원하는 폰트 바꾸고 싶을때 직접 객체를 만들 것
// 객체 만드는 예시
// ex)
// const fontStyle = { fontSize: "30px", color: "white" };
//함수 호출시 순서 (parent, 넓이, 높이, 외곽선, 배경, 폰트, 콜백)

function fontAndLayoutEditor(parent,width,height,border,backgroundColor,font,callback) {
  const parentStyle = parent.style;
  parentStyle.width = width;
  parentStyle.height = height;
  parentStyle.backgroundColor = backgroundColor;
  
  if (border === "1") {
    parentStyle.border = "1px solid black";
  } else if (typeof border === "string") {
    parentStyle.border = border;
  }
  
  if (typeof font === "string") {
    parentStyle.fontSize = font;
  } else if (typeof font === "object") {
    for (let i in font) {
      parentStyle[i] = font[i];
    }
  }
  
  if (callback) {
    callback(parentStyle);
  }
}
export default fontAndLayoutEditor;
