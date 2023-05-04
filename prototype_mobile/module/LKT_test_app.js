import http from 'http'
import url from 'url'
import serverReadFileModule from './server_readfile.js'
import reqOnData from './server_post.js'


const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const pathName = parseUrl.pathname;
  const Method = req.method;

  if (Method === 'GET' && pathName === '/') {
    serverReadFileModule(res, '../mysql/LKT_mysql_input.html', 'text/html', 200);
  } else if (Method === 'POST' && pathName === '/set') {
    req.on('data', function(chunk) {
      reqOnData(chunk, 'insert into b (name, type, taek) values (?,?,?)');
    });
    req.on('end', function () {
      serverReadFileModule(res, '../mysql/LKT_test.html', 'text/html', 200)
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


