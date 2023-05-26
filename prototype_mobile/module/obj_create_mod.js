function objectA(object) {
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
  for (let i in object) {
    const objectKey = [
      "recipe_writer",
      "recipe_title",
      "thumbnail_img",
      "regist_ingredients",
    ];
    let objResult = new FirstObject(objectKey[i], object[i]);
    body.push(objResult.result);
  }

  return body;
}

export default objectA;
