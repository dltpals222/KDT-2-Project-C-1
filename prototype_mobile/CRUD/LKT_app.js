import http from 'http'
import url from 'url'
import serverReadFileModule from '../module/server_readfile.js'
import reqOnData from '../module/server_post.js'
import fs from 'fs';
import mysql from 'mysql'

const server = http.createServer((req, res) => {

  const dbSet = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kids0302',
    database: 'taek',
    port: 3306, //Mysql 포트
    connectionLimit: 5, //동시에 db에 접속가능한 클라이언트 수
    waitForConnections: true //클라이언트가 연결을 요청할 때 대기 여부
  })

  const parseUrl = url.parse(req.url);
  const pathName = parseUrl.pathname;
  const Method = req.method;

  if (Method === 'GET') {
    switch (pathName) {
      // json 데이터들과 c,r,u,d 버튼이 있는 페이지
      case "/":
        serverReadFileModule(res, 'LKT_main.html', 'text/html', 200);
        break;
      // 여기서부터 favicon까지 위의 LKT_main.html을 브라우저에 표출하기 위한 get방식
      case "/LKT_main.js":
        serverReadFileModule(res, 'LKT_main.js', 'text/javascript', 200);
        break;
      case "/module/all_mighty_editor.js":
        serverReadFileModule(res, '../module/all_mighty_editor.js', 'text/javascript', 200);
        break;
      case "/db.json":
        serverReadFileModule(res, 'db.json', 'application/json', 200);
        break;
      case '/favicon.ico':
        (err) => { if (err) { throw err } }
        break;
      // c버튼을 눌렀을 때 LKT_R.html을 get방식으로 받아오는 case
      case "/c":
        serverReadFileModule(res, 'LKT_R.html', 'text/html', 200);
        break;
      // 필요한 파일들을 받아오기 위한 기능
      default:
        console.log(pathName);
    }
  }

  else if (Method === 'POST') {
    switch (pathName) {
      // 버튼의 C로직
      case "/set":
        req.on('data', function (chunk) {
          const a = reqOnData(chunk);
          dbSet.connect();
          dbSet.query('insert into b (name, type, taek) values (?,?,?)', a, (err) => {
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
        })
        req.on('end', function () {
          res.writeHead(302, { Location: '/' });
          res.end();
        })
        break;


    }
  }
})

server.listen(2080, function (err) {
  if (err) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
})


