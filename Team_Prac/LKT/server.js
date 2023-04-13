const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const mysql = require('mysql');

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

class Server {
  constructor(port) {
    this.port = port;
  }
  start() {
    http.createServer((req, res) => {
      const parseUrl = url.parse(req.url, true);
      const pathName = parseUrl.pathname;
      const Method = req.method;

      if (Method === 'GET' && pathName === '/') {
        this.handleGetRequest(req, res);
      }
      else if (Method === 'POST' && pathName === '/post') {
        this.handlePostRequest(req, res);
      }
    })
      .listen(this.port, () => {
        console.log(`Server running on port ${this.port}`);
      });
  }


  handleGetRequest(req, res) {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('500 ');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  }

  handlePostRequest(req, res) {

    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      let post = qs.parse(body);
      let name = post.name;
      let type = post.type;
      let taek = post.taek;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<!doctype html>
        <html>
        <head>
          <title>POST</title>
          <meta charset="utf-8">
        </head>
        <body>
        <form action="/post_test" method="post">
          <p>title : ${name}</p>
          <p>description : ${type}</p>
          <p>title : ${taek}</p>
          </form>
        </body>
        </html>`
      );

      function user(a, b, c) {
        this.name = a;
        this.type = b;
        this.level = c;
      }
      let namename = [name];
      let typename = [type];
      let taekname = [taek];

      let array = [];
      for (let i = 0; i < namename.length; i++) {
        array.push(new user(namename[i], typename[i], taekname[i]));
      }
      console.log(array);
      fs.writeFileSync("b.JSON", JSON.stringify(array, null, 2), "utf-8");

      const query = 'insert into node (name, type, level) values (?)';
      const values =array.map(value => [value.name, value.type, value.level]);

      connection.query(query, values, (err, results) => {
        if (err) {
          console.error('쿼리실행 실패', err);
        } else {
          console.log('결과물 확인', results);
        }
        connection.end();
      })
      res.end();
    })
  }
}
const server = new Server(2080);
server.start();