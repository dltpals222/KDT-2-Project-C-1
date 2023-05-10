import mysql from 'mysql'
import fs from 'fs';

function db_module(query, reqOnData_value){

  const dbSet = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kids0302',
    database: 'taek',
    port: 3306, //Mysql 포트
    connectionLimit: 5, //동시에 db에 접속가능한 클라이언트 수
    waitForConnections: true //클라이언트가 연결을 요청할 때 대기 여부
  })

  dbSet.connect();
  dbSet.query(query, reqOnData_value, (err, results) => {
    if (err) {
      console.error("쿼리실행 실패", err);
    } else {
      console.log("쿼리실행성공");
    }
  });
  dbSet.query("SELECT * FROM  b", function (err, results) {
    if (err) {
      console.error(err)
    } else {
      fs.writeFileSync("db.json", JSON.stringify(results, null, 2));
    }
  });
  dbSet.end();
}

export default db_module;