import qs from "querystring";

// chunk 데이터 가공하여 postArray배열을 반환하는 로직
function reqOnData(chunk) {
  let body = "";
  body += chunk;
  let postArray = [];
  let post = qs.parse(body);
  console.log(post);
  for (let i in post) {
    postArray.push(post[i]);
  }
  console.log(postArray);
  return postArray;
}

export default reqOnData;
