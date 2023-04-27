import http from 'http'
import Url from 'url'
import fs from 'fs'
import serverReadFileModule from './module/server_readfile.js'

//GET으로 받아올 때 작성한 것으로 POST는 뒤로 미루었습니다.

const server = http.createServer((req, res) => {
  const urlParse = Url.parse(req.url)
  const urlPathName = urlParse.pathname
  const urlMethod = req.method

  console.log(urlPathName)
  console.log(urlMethod)

  //페이지별 폴더 제작 후 페이지별로 html, js파일 case에 넣기 주석으로 구분해주시면 감사하겠습니다.
  if(urlMethod === 'GET'){
    switch(urlPathName){
      //메인 페이지
      case '/':
        serverReadFileModule(res, 'index.html', 'text/html',200)
        break 
      case '/index.js':
        serverReadFileModule(res,'index.js','text/javascript',200)
        break

      //레시피 리스트 만들기
      case '/recipe_list':
        serverReadFileModule(res, 'recipe_list/recipe_list.html', 'text/html', 200)
        break
        case '/common/common_header.js':
          serverReadFileModule(res, '../common/common_header.js', 'text/javascript', 200)
          break
      case '/recipe_list.js':
        serverReadFileModule(res, 'recipe_list/recipe_list.js', 'text/javascript', 200)
        break

      //favicon에러처리
      case '/favicon.ico':
        err => {if (err) {throw err}}
        break

      //all_mighty_editor
      case '/module/all_mighty_editor.js':
        serverReadFileModule(res, 'module/all_mighty_editor.js','text/javascript',200)
        break

      //404 페이지 처리
      default:
        serverReadFileModule(res, '404.html','text/html',404)
        console.log(urlPathName)
        break
    } //if 문 내 switch 끝

  } else if (urlMethod === 'POST') {

  }//createServer 내 if 문 끝
}) //server 함수 끝

server.listen(2080,err => {
  if(err){
    console.error(err)
  } else {
    console.log('2080포트가 정상작동합니다.')
  }
})// listen 끝