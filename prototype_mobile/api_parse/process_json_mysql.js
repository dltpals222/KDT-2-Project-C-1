import mysql from "mysql";
import fs from "fs";
import path from "path";

// npm install -s mysql 모듈 설치 해야함
// 이부분 보통 모듈화 해서 쓰는 것 같음
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
  const row = jsonData.row;

  //테이블 데이터 전체 삭제
  // db.query('DELETE FROM text WHERE id<10000');

  //데이터 추가
  const sql = "INSERT INTO parse_data (ingredients) VALUES ?";
  //update 시도
  // const sqlUpdate = 'UPDATE text SET (id, name, email) WHERE id>10 ?';
  const values = row.map((value) => [value.ingredients]);
  console.log(values);

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("성공");
    }
  });
  db.end();
});
