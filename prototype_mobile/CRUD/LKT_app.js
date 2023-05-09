import http from 'http'
import url from 'url'
import serverReadFileModule from '../module/server_readfile.js'
import reqOnData from '../module/server_post.js'
import fs from 'fs';


const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const pathName = parseUrl.pathname;
  const Method = req.method;

  if (Method === 'GET' && pathName === '/') {
    serverReadFileModule(res, 'LKT_R.html', 'text/html', 200);
  } else if (Method === 'POST' && pathName === '/set') {
    req.on('data', function (chunk) {
      reqOnData(chunk, 'insert into b (name, type, taek) values (?,?,?)', (dbSet) => {
        dbSet.query("SELECT * FROM  b", function (err, results) {
          if (err) {
            console.error(err)
          } else {
            fs.writeFileSync("db.json", JSON.stringify(results, null, 2));
          }
        });
      });
    });
    req.on('end', function () {
      serverReadFileModule(res, '../mysql/LKT_test.html', 'text/html', 200)
      // res.writeHead(200, { location: "main.html" });
      // res.end();
    })
  }
})

server.listen(2080, function (err) {
  if (err) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
})


