import fs from 'fs'
import qs from 'querystring'
import http from 'http'
import mysql from 'mysql'
import url from 'url'

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const pathName = parseUrl.pathname;
  const Method = req.method;

  if(Method === 'GET' && pathName === '/'){
    serverReadFileModule(res, '../mysql/mysql_input.html','text/html',200);
  }else if(Method === 'POST' && pathName === '/set' ){
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

function serverReadFileModule (res, path, contentTypeValue, statusCode){
  fs.readFile(path, (err, data)  => {
    if(err){
      res.writeHead(500,{'content-type':'text/html'});
      res.write('500 internet error');
      res.end();
    } else {
      res.writeHead(statusCode, {'content-type':contentTypeValue});
      res.write(data);
      res.end();
    } 
  }) //readFile 끝
}

function serverPostModule(req, res) {
  let body = '';
  req.on('data', function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    let post = qs.parse(body);
    let name = post.name;
    let type = post.type;
    let taek = post.taek;
    console.log(name);
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

    function user(a, b, c) {
      this.name = a;
      this.type = b;
      this.taek = c;
    }

    let namename = [name];
    let typename = [type];
    let taekname = [taek];

    let array = [];
    for (let i = 0; i < namename.length; i++) {
      array.push(new user(namename[i], typename[i], parseInt(taekname[i], 10)));
    }
    console.log(array);

    const query = 'insert into a (name, type, taek) values (?)';
    const values = array.map(value => [value.name, value.type, value.taek]);
    console.log(values);

    dbConfig.query(query, values, (err) => {
      if (err) {
        console.error('쿼리실행 실패', err);
      } else {
        console.log("쿼리실행성공");
      }
    })
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("포스트 방식 성공");
    res.end();
  })
}
