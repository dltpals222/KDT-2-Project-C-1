function objectA(object, number) {
  class FirstObject {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }

    get result() {
      let objectResult = {};
      objectResult[this.key] = this.value;
      return objectResult;
    }
  }

  let body = [];
  const objectKey = [
    "recipe_writer",
    "recipe_title",
    "thumbnail_img",
    "regist_ingredients",
  ];
  for (let i = 0; i < 4; i++) {
    let objResult = new FirstObject(objectKey[i], object[i]);
    body.push(objResult.result);
  }
  body[3].recipe_id = number;

  return body;
}

export default objectA;
