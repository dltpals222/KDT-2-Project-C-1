const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'kids0302',
  database: 'taek',
  port: 3306, //Mysql 포트
  connectionLimit: 5, //동시에 db에 접속가능한 클라이언트 수
  waitForConnections: true //클라이언트가 연결을 요청할 때 대기 여부
};

const connection = mysql.createConnection(dbConfig);
connection.connect();
const filePath = './b.JSON';

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) throw err;

  const pokemonData = JSON.parse(data);

  const query = 'insert into node (name, type, level) values (?)';
  const queryresult = 'select * from node';
  // 이때 ?는 값이 아니라 값의 위치를 의미한다. 매개변수와 같은 의미이다.
  const values = pokemonData.map(value => [value.name, value.type, value.level])
  console.log(values);
  console.log(queryresult);
  //쿼리 실행
  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('쿼리실행 실패', err);
    } else {
      console.log('결과물 확인', results);
    }
  })

  connection.query(queryresult, (err, result) => {
    if (err) {
      console.error('실패', err);
    } else {
      console.log('select 확인', result);
    }
  });
  connection.end();
})
