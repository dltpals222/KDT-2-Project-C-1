import mysql from "mysql";

const dbSet = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1q2w3e4r",
  database: "msmg",
  port: 3307, //Mysql 포트
  connectionLimit: 5, //동시에 db에 접속가능한 클라이언트 수
  waitForConnections: true, //클라이언트가 연결을 요청할 때 대기 여부
});

export default dbSet;
