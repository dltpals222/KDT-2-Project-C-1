import qs from "querystring";
import dbSet from "../mysql/mysql_connect.js";
import fs from "fs";

function reqOnData(chunk, query, callback) {
  let body = "";
  body += chunk;
  let postArray = [];
  let post = qs.parse(body);
  console.log(post);
  for (let i in post) {
    postArray.push(post[i]);
  }
  console.log(postArray);

  if (callback) {
    callback(dbSet);
  }
  return postArray;
}

export default reqOnData;
/* *레시피 등록
 * [{recipe_title :
 * recipe_thumbnail :
 * recipe_writer: unknown
 * }]
 * 조리 재료
 * [{recipe_ingredients : "고추 피망 파프리카 오이"]}
 * 조리 스텝
 * [{recipe_step0n :
 * recipe_img0n :
 * }]
 */
