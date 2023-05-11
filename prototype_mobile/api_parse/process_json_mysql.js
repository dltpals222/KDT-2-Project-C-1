import mysql from "mysql";
import fs from "fs";
import path from "path";

// db 연동하기
const db = mysql.createConnection({
  // 본인 아이디 패스워드 db이름 사용할 것
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "test1",
});

db.connect();

const filePath = "./processed_data.json";

// fs 모듈을 사용하여 JSON 파일 읽기
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;

  // 데이터 파싱
  const jsonData = JSON.parse(data);
  const rows = jsonData.row;
  console.log(rows);

  //테이블 데이터 전체 삭제
  // db.query("DELETE FROM parse_data WHERE id<10000");

  //데이터 추가
  const sql = "INSERT INTO parse_data (ingredients) VALUES ?";
  //update 시도
  // const sqlUpdate = 'UPDATE text SET (id, name, email) WHERE id>10 ?';
  const values = rows.map((value) => value.ingredients);
  // console.log(values);

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("성공");
    }
    db.end();
  });
});
