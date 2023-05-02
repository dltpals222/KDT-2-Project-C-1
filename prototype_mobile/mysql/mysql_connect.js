const dbConfig = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kids0302',
  database: 'taek',
  port: 3306, //Mysql 포트
  connectionLimit: 5, //동시에 db에 접속가능한 클라이언트 수
  waitForConnections: true //클라이언트가 연결을 요청할 때 대기 여부
})

dbConfig.connect();

dbConfig.end();