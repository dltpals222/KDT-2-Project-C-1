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
        return callback;
      } else {
        // ""이외 나머지 string 혹은 number시 작동

        const element = document.createElement(tagName);
        element.setAttribute("id", id);
        parent.appendChild(element);
        if (callback) {
          callback(element);
        }
        return callback;
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
          return callback;
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
        return callback;
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
