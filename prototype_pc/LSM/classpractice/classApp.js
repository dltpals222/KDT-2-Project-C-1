import http from 'http'
import url from 'url'
import fs from 'fs'
import path, { resolve } from 'path';

class Server {
  constructor(port){
    this.port = port
  }

  start(){
    http.createServer((req, res) => {
      const reqUrl = url.parse(req.url,true);
      const pathName = reqUrl.pathname;
      const method = req.method;

      if(pathName === '/' && method === 'GET'){
        fs.readFile(path.join(resolve(),'/index.html'),(err, data) => { 
          if(err){
            res.writeHead(500, {'content-type':'text/plain'})
            res.end('500 서버에 문제가 있습니다.')
            console.error(err)
          } else {
            res.writeHead(200, {'content-type':'text/html; charset=utf-8'})
            res.write(data)
            res.end()
          }
        })
      } else if(pathName === '/' && method === 'POST') {
        let body = '';
        req.on('data',chunk => {
          body += chunk.toString();
        }) //req.on data끝
        req.on('end',()=> {
          console.log(body)
          res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
          res.write(`<h1>${body}</h1>`)
          res.end();
        }) //req.on end 끝
      } //post 끝
    }).listen(this.port,console.log(`${this.port} 정상작동 합니다.`)) // createserver 끝
  } //start() 종료
} //class server 끝

const server = new Server(2080);
server.start();
