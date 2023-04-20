// ※callback, return 따로 언급이 없는 곳은 둘 다 있는 곳이다.
//
// 1. 제일 먼저 인식되는 것은 length이므로 2 이상일 경우 tagName으로 지정된 태그를 갯수대로 만듦(callback, return 없음)
// 2. length는 기본값이 1이므로 빈칸으로 놓더라도 1로 설정됨
// 3. id는 기본값으로 ""설정되어있다. (type은 string이다)
// 4. id에 string과 number 입력 -> 하나의 태그에 id의 값으로 저장된다.
// 5. id에 배열을 입력 -> 배열이 1개인 경우 5번과 같은 동작을 한다.
// 6. id에 배열을 입력 -> 배열이 2개 이상인 경우 loop로 동작되며 여기서는 callback과 return이 없다.
// 7. id에 객체를 입력 -> 객체의 키가 속성(id, type 등과 같은)이 되며 하나의 태그에 여러개의 속성이 만들어진다.

function multiAndSingleTagMaker(
  parent,
  tagName,
  id = "",
  length = 1,
  callback
) {
  if (length === 1) {
    //제일 먼저 length가 기본값이거나 1을 입력시 작동한다.
    if (typeof id === "string" || typeof id === "number") {
      // string 혹은 number입력시 작동

      if (id === "") {
        //""입력해도 string으로 인식하여 따로 작성

        //string -> id에 ""입력 시 a와 같은 작동
        const element = document.createElement(tagName);
        parent.appendChild(element);
        if (callback) {
          callback(element);
        }
        return element;
      } else {
        // ""이외 나머지 string 혹은 number시 작동

        const element = document.createElement(tagName);
        element.setAttribute("id", id);
        parent.appendChild(element);
        if (callback) {
          callback(element);
        }
        return element;
      }
      //string number 작동 끝
    } else if (typeof id === "object") {
      //object로 한번 걸러 준뒤에

      if (Array.isArray(id)) {
        // true이면 배열 아니면 객체

        if (id.length === 1) {
          //배열이 하나일때

          const element = document.createElement(tagName);
          element.setAttribute("id", id[0]);
          parent.appendChild(element);
          if (callback) {
            callback(element);
          }
          return element;
        } else if (id.length > 1) {
          // 배열이 두개 이상일때

          id.map((mapElement) => {
            const element = document.createElement(tagName);
            element.setAttribute("id", mapElement);
            parent.appendChild(element);
          });
        } //배열 끝
      } else {
        //객체일때

        const element = document.createElement(tagName);
        for (let key in id) {
          element.setAttribute(key, id[key]);
        }
        parent.appendChild(element);
        if (callback) {
          callback(element);
        }
        return element;
      }
    }
  } else {
    // 4.번 단순 for문
    for (let i = 0; i < length; i++) {
      const element = document.createElement(tagName);
      parent.appendChild(element);
    }
  }
}

export default multiAndSingleTagMaker;
