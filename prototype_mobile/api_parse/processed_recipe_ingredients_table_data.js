import mysql from "mysql";
import fs from "fs";
import path from "path";

// db 연동하기
const db = mysql.createConnection({
  // 본인 아이디 패스워드 db이름 사용할 것
  host: "localhost",
  user: "root",
  password: "0302",
  database: "msmg",
  port : 3306
});

db.connect();

const filePath = "./processed_data2.json";

// fs 모듈을 사용하여 JSON 파일 읽기
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;

  // 데이터 파싱
  const jsonData = JSON.parse(data);
  const rows = jsonData.row;
  console.log(rows);

  // 테이블 데이터 전체 삭제
  // db.query("DELETE FROM parse_data WHERE id<10000");

  // 데이터 추가
  const sql =
    "INSERT INTO recipe_ingredients_table (recipe_id, recipe_weight, regist_ingredients, ingredients_id) VALUES ?";
  const values = rows.map((value) => [
    value.recipe_id, // recipe_id 값 추가
    value.recipe_weight,
    value.regist_ingredients,
    value.ingredients_id,
  ]);

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      const insertedRecipeIds = result.insertId; // 새로 추가된 recipe_id 값
      console.log("성공", insertedRecipeIds);
    }
    db.end();
  });
});
