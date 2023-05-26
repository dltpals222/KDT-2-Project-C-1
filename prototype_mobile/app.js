import http from "http";
import Url from "url";
import fs from "fs";
import mysql from "mysql";
import path from "path";
import qs from "querystring";
import serverReadFileModule from "./module/server_readfile.js";
import serverPostModule from "./module/server_post.js";
import dbSet from "./mysql/mysql_connect.js";
import reqOnData from "./module/server_post.js";
import db_module from "./CRUD/db_module.js";
/* 
  mysql_connect.js 로가서 정보를 바꾸고
  mysql 에 있는 readme.md 들어가서 테이블 정보 
  테이블 생성
*/
dbSet.connect();
//GET으로 받아올 때 작성한 것으로 POST는 뒤로 미루었습니다.

const server = http.createServer((req, res) => {
  const urlParse = Url.parse(req.url);
  const urlPathName = urlParse.pathname;
  const urlMethod = req.method;
  const urlId = urlParse.path
  const search = urlId.split('=').join("&").split("&")[1]
  // const urlId2 = urlId.split('&')[0]
  // console.log("정답",search)
  // console.log(urlId2)

  // console.log(urlPathName);
  // console.log(urlMethod);

  //페이지별 폴더 제작 후 페이지별로 html, js파일 case에 넣기 주석으로 구분해주시면 감사하겠습니다.
  //html파일에 script type='module'로 추가시 밑에 common파일 추가한것 참고
  //나머지 페이지는 레시피리스트처럼 action에 적을 것 예상하고 추가하면 됩니다.
  if (urlMethod === "GET") {
    switch (urlPathName) {
      //* mysql 저장 연습
      case "/":
        serverReadFileModule(res, "main/main.html", "text/html", 200);
        break;
      case "/main.js":
        serverReadFileModule(res, "main/main.js", "text/javascript", 200);
        break;

      //* 레시피 리스트
      case "/recipe_list":
        serverReadFileModule(res, "recipe_list/recipe_list.html", "text/html", 200);
        break;
      case "/recipe_list.js":
        serverReadFileModule(res, "recipe_list/recipe_list.js", "text/javascript", 200);
        break;
      case "/liUpdate":
        serverReadFileModule(res, "recipe_list/recipe_update.html", "text/html", 200);
        break;
      case "/recipe_update.js":
        serverReadFileModule(res, "recipe_list/recipe_update.js", "text/javascript", 200);
        break;
      case "/recipe_list_paging.js":
        serverReadFileModule(res, "recipe_list/recipe_list_paging.js", "text/javascript", 200);
        break;

      //* 레시피 작성
      case "/recipe_write":
        serverReadFileModule(res, "recipe_write/recipe_write.html", "text/html", 200);
        break;
      case "/recipe_write.js":
        serverReadFileModule(res, "recipe_write/recipe_write.js", "text/javascript", 200);
        break;

      //* JSON 파일
      case "/JSON/recipe_list_data.json":
        serverReadFileModule(res, "JSON/recipe_list_data.json", "application/json", 200);
        break;

      case "/JSON/api_processed.json":
        serverReadFileModule(res, "JSON/api_processed.json", "application/json", 200);
        break;

      //* common 파일
      //common 파일
      case "/common/common_header.js":
        serverReadFileModule(res, "common/common_header.js", "text/javascript", 200);
        break;

      //* favicon에러처리
      case "/favicon.ico":
        (err) => {
          if (err) {
            throw err;
          }
        };
        break;

      //* 모듈들
      case "/module/all_mighty_editor.js":
        serverReadFileModule(res, "module/all_mighty_editor.js", "text/javascript", 200);
        break;
      case "/module/recipe_step_maker.js":
        serverReadFileModule(res, "module/recipe_step_maker.js", "text/javascript", 200);
        break;
      case "/module/paging_recipe_list_make_content.js":
        serverReadFileModule(res, "module/paging_recipe_list_make_content.js", "text/javascript", 200);
        break;
      case "/module/paging_render_content.js":
        serverReadFileModule(res, "module/paging_render_content.js", "text/javascript", 200);
        break;
      case "/module/paging_etc_module.js":
        serverReadFileModule(res, "module/paging_etc_module.js", "text/javascript", 200);
        break;
      case "/module/paging_render_button.js":
        serverReadFileModule(res, "module/paging_render_button.js", "text/javascript", 200);
        break;

      //* 404 페이지 처리
      //레시피 리스트
      case "/recipe_list":
        serverReadFileModule(res, "recipe_list/recipe_list.html", "text/html", 200);
        break;
      case "/common_search.js":
        serverReadFileModule(res, "recipe_list/common_search.js", "text/javascript", 200);
        break;

      // 페이징에서 임시로 변경
      case "/module/paging_recipe_list_imsi.js":
        serverReadFileModule(res, "module/paging_recipe_list_imsi.js", "text/javascript", 200);
        break;


      //favicon에러처리
      case "/favicon.ico":
        (err) => {
          if (err) {
            throw err;
          }
        };
        break;

      //all_mighty_editor
      case "/module/all_mighty_editor.js":
        serverReadFileModule(res, "module/all_mighty_editor.js", "text/javascript", 200);
        break;

      //404 페이지 처리
      default:
        serverReadFileModule(res, "404.html", "text/html", 404);
        console.log(urlPathName);
        break;
    } //if 문 내 switch 끝
    dbSet.query(
      "select * from recipe_regist_table as t1 inner join ( select recipe_id, group_concat(regist_ingredients) as regist_ingredients from recipe_ingredients_table group by recipe_id) as t2 on t1.recipe_id = t2.recipe_id;",
      function (err, results, fields) {
        fs.writeFileSync("JSON/recipe_list_data.json", JSON.stringify(results, null, 2));
      }
    );
    dbSet.query("select * from recipe_ingredients_table;", function (err, results, fields) {
      fs.writeFileSync("JSON/api_processed1.json", JSON.stringify(results, null, 2));
    });
    dbSet.query("select * from recipe_regist_table;", function (err, results, fields) {
      fs.writeFileSync("JSON/api_processed2.json", JSON.stringify(results, null, 2));
    });



  } else if (urlMethod === "POST") {

    switch (urlPathName) {
      case "/liDelete":
        req.on("data", function (chunk) {
          const deleteSet = reqOnData(chunk);

          console.log("app.js" + deleteSet)
          dbSet.query(`delete from recipe_ingredients_table where recipe_id = ?`, deleteSet, (err) => {
            if (err) {
              console.error("쿼리실행 실패", err);
            } else {
              console.log("쿼리실행성공");
            }
          })
          dbSet.query("SELECT * FROM recipe_ingredients_table", function (err, results) {
            if (err) {
              console.error(err);
            } else {
              fs.writeFileSync("recipe_list_data.json", JSON.stringify(results, null, 2));
            }
          });
        })
        req.on("end", function () {
          res.writeHead(302, { Location: "/recipe_list" });
          res.end();
        });
        break;

      case "/u_action":
        req.on("data", function (chunk) {
          console.log("urlId 확인용", urlId)
          let deleteSet = reqOnData(chunk);
          console.log('deleteSet 확인용', deleteSet)
          dbSet.query(`update recipe_regist_table set recipe_register = ? where recipe_id = 989`, [deleteSet], (err) => {
            if (err) {
              console.error("쿼리실행 실패", err);
            } else {
              console.log("쿼리실행성공");
            }
          })
          dbSet.query("SELECT * FROM recipe_regist_table", function (err, results) {
            if (err) {
              console.error(err);
            } else {
              fs.writeFileSync("JSON/recipe_list_data.json", JSON.stringify(results, null, 2));
            }
          });
        })
        req.on("end", function () {
          res.writeHead(302, { Location: "/recipe_list" });
          res.end();
        });
        break;
    }
  } //createServer 내 if 문 끝


}); //server 함수 끝

server.listen(2080, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("2080포트가 정상작동합니다.");
  }
}); // listen 끝
