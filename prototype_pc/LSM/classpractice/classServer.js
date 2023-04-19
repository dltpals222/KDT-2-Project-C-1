import http from 'http'
import fs from 'fs'
import url from 'url'

class Server {
  constructor(port){
    this.port = port
  }

  set port(value) {
    if(typeof(value)==='number'){
      this._port = value;
    } else {
      throw new Error('포트에 숫자만 입력가능합니다.')
    }
  }

  start(){
    http.createServer((req, res) => {
  //     const url = url.parse(req.url, true);
  //     const pathName = url.pathName;
      const method = req.method;

      console.log(method)
  //     console.log(pathName)

      if(method === 'GET'){
        res.writeHead(200, {'content-type':'text/html'});
        res.end('객체지향 프로그래밍의 시작 생성자 함수');
      }
      }) .listen(this._port,()=>{console.log(`${this._port} 정상작동 중`)})
    } //start() 끝


  // start(){
  //   this.server = http.createServer((req, res)=> {
  //     res.writeHead(200, {'content-type':'text/html'});
  //     res.end('class server start !!');
  //   }).listen(this._port, ()=>{console.log(`${this._port} 작동 중`)});
  // }


  } //Server 끝

  const server = new Server(2222);
  server.start();
