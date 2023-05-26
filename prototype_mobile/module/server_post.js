import qs from "querystring";
import dbSet from "../mysql/mysql_connect.js";
import fs from "fs";
import objectA from "./obj_create_mod.js";

function reqOnData(chunk, number) {
  let body = "";
  body += chunk;
  let postArray = [];
  let post = qs.parse(body);
  console.log(post);
  for (let i in post) {
    postArray.push(post[i]);
  }
  const tmpA = objectA(postArray, number);
  console.log(postArray);
  tmpA.forEach((element, i) => {
    if (i < 3) {
      dbSet.query("insert into recipe_regist_table set ?", element, (err) => {
        if (err) {
          console.error("쿼리실행 실패", err);
        } else {
          console.log("쿼리실행성공");
        }
      });
    } else {
      dbSet.query(
        "insert into recipe_ingredients_table set ?",
        element,
        (err) => {
          if (err) {
            console.error("쿼리실행 실패", err);
          } else {
            console.log("쿼리실행성공");
          }
        }
      );
    }
  });
}

export default reqOnData;
