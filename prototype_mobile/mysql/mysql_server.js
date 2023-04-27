const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  if(req.method === 'GET' && req.url === '/'){
    const main = fs.readFileSync("./mysql.html");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(main);
    res.end();
  }
})
server.listen(3050, function (err) {
  if (err) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
})