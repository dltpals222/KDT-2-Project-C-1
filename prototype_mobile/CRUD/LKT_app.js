import http from 'http'
import url from 'url'
import serverReadFileModule from '../module/server_readfile.js'
import reqOnData from '../module/server_post.js'
import fs from 'fs';
import mysql from 'mysql'

const server = http.createServer((req, res) => {

  // res.setHeader('Access-Control-Allow-Origin', '*');

  const parseUrl = url.parse(req.url);
  const pathName = parseUrl.pathname;
  const Method = req.method;

  if (Method === 'GET') {
    switch (pathName) {
      case "/":
        serverReadFileModule(res, 'LKT_main.html', 'text/html', 200);
        break;
      case "/LKT_main.js":
        serverReadFileModule(res, 'LKT_main.js', 'text/javascript', 200);
        break;
      case "/c":
        serverReadFileModule(res, 'LKT_R.html', 'text/html', 200);
        break;
      case "/module/all_mighty_editor.js":
        serverReadFileModule(res, '../module/all_mighty_editor.js', 'text/javascript', 200);
        break;
      case "/db.json":
        serverReadFileModule(res, 'db.json', 'application/json', 200);
        break;
      case '/favicon.ico':
        (err) =>{if (err) { throw err }}
        break;
      default:
        console.log(pathName);
    }
  }

  else if (Method === 'POST') {
    switch (pathName) {
      case "/set":
        req.on('data', function (chunk) {
          reqOnData(chunk, 'insert into b (name, type, taek) values (?,?,?)', (dbSet) => {
            dbSet.query("SELECT * FROM  b", function (err, results) {
              if (err) {
                console.error(err)
              } else {
                fs.writeFileSync("db.json", JSON.stringify(results, null, 2));
              }
            });
            dbSet.end();
          });
        });
        req.on('end', function () {
          // serverReadFileModule(res, 'LKT_main.html', 'text/html', 200)
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


