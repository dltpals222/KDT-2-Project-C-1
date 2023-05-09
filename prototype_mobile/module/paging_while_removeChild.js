//* while사용
//* parent안에 childNodes가 있으면 식이 작동한다.
//* 마지막 child부터 하나씩 전부 삭제된다.

export function whileRemoveChild (parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}
