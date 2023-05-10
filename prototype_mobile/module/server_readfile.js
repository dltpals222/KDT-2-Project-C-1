import fs from 'fs'

//server에서 switch에 파일 입력하려고 만든 모듈
//res자리에는 res그대로 적어주면 됩니다.
//path자리에는 절대경로 혹은 app.js파일을 기준으로 상대경로를 적어주시면 됩니다.
//contentTypeValue에는 html파일이면 text/html 자바스크립트 파일이면 text/javascript 등등 적어주시면 됩니다.
//statusCode는 정상작동시 200 그 이외에는 찾아서 작성하시면 됩니다.

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

export default serverReadFileModule