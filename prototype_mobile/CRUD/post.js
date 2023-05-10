import qs from "querystring";

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
