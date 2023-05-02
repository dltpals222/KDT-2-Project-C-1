import fs from 'fs'
import qs from 'querystring'
import http from 'http'
import mysql from 'mysql'
import url from 'url'

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const pathName = parseUrl.pathname;
  const Method = req.method;

  if (Method === 'GET' && pathName === '/') {
    serverReadFileModule(res, '../mysql/mysql_input.html', 'text/html', 200);
  } else if (Method === 'POST' && pathName === '/set') {
    serverPostModule(req, res);
  }
})

server.listen(2080, function (err) {
  if (err) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
})

function serverReadFileModule(res, path, contentTypeValue, statusCode) {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.write('500 internet error');
      res.end();
    } else {
      res.writeHead(statusCode, { 'content-type': contentTypeValue });
      res.write(data);
      res.end();
    }
  }) //readFile 끝
}

function serverPostModule(req, res) {

  req.on('data', function (chunk) {
    let body = '';
    body += chunk;

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
    console.log(body);
    let post = qs.parse(body);
    console.log(post)
    let name = post.name;
    let type = post.type;
    let taek = post.taek;
    console.log(name);

    let array = [];
    array.push(name, type, parseInt(taek, 10));
    console.log(array);
    const query = 'insert into a (name, type, taek) values (?,?,?)';

    dbConfig.query(query, array, (err) => {
      if (err) {
        console.error('쿼리실행 실패', err);
      } else {
        console.log("쿼리실행성공");
      }
    })
    dbConfig.end();
  });

  req.on('end', function () {
    serverReadFileModule(res,'../mysql/test.html', 'text/html', 200)
  })
}
