import qs from "querystring";
import dbSet from "../mysql/mysql_connect.js";
import fs from "fs";

function reqOnData(chunk,callback) {
  let body = "";
  body += chunk;
  let postArray = [];
  let post = qs.parse(body);
  console.log("post 모듈 10번째줄",post);
  for (let i in post) {
    postArray = (post[i]);
  }
  console.log(postArray);
  // dbSet.query(query, postArray, (err) => {
  //   if (err) {
  //     console.error("쿼리실행 실패", err);
  //   } else {
  //     console.log("쿼리실행성공");
  //   }
  // });
  if (callback) {
    callback(dbSet);
  }
  return postArray
}

export default reqOnData;
