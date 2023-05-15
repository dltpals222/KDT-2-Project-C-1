import http from "http";
import url from "url";
import serverReadFileModule from "../module/server_readfile.js";
import reqOnData from "./post.js";
import fs from "fs";
import mysql from "mysql";
import db_module from "./db_module.js";

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const pathName = parseUrl.pathname;
  const Method = req.method;

  if (Method === "GET") {
    switch (pathName) {
      // json 데이터들과 c,r,u,d 버튼이 있는 페이지
      case "/":
        serverReadFileModule(res, "LKT_main.html", "text/html", 200);
        break;
      // 여기서부터 favicon까지 위의 LKT_main.html을 브라우저에 표출하기 위한 get방식
      case "/LKT_main.js":
        serverReadFileModule(res, "LKT_main.js", "text/javascript", 200);
        break;
      case "/module/all_mighty_editor.js":
        serverReadFileModule(
          res,
          "../module/all_mighty_editor.js",
          "text/javascript",
          200
        );
        break;
      case "/db.json":
        serverReadFileModule(res, "db.json", "application/json", 200);
        break;
      case "/favicon.ico":
        (err) => {
          if (err) {
            throw err;
          }
        };
        break;
      // c버튼을 눌렀을 때 LKT_R.html을 get방식으로 받아오는 case
      case "/c":
        serverReadFileModule(res, "LKT_C.html", "text/html", 200);
        break;
      // r버튼을 눌렀을 때 LKT_main.html을 get방식으로 받아오는 방식
      case "/r":
        serverReadFileModule(res, "LKT_main.html", "text/html", 200);
        break;
      // u버튼을 눌렀을 때 LKT_U.html을 get방식으로 받아오는 방식
      case "/u":
        serverReadFileModule(res, "LKT_U.html", "text/html", 200);
        break;
      //u버튼을 눌렀을 때 LKT_U.js을 get방식으로 받아오는 방식
      case "/LKT_U.js":
        serverReadFileModule(res, "LKT_U.js", "text/javascript", 200);
        break;
      // d버튼을 눌렀을 때 삭제하는 기능
      case "/d":
        serverReadFileModule(res, "LKT_D.html", "text/html", 200);
        break;
      // 필요한 파일들을 받아오기 위한 기능
      default:
        console.log(pathName);
    }
  } else if (Method === "POST") {
    switch (pathName) {
      // 버튼의 C로직
      case "/c_action":
        req.on("data", function (chunk) {
          const insert = reqOnData(chunk);

          db_module("insert into b (name, type, taek) values (?,?,?)", insert);
        });
        req.on("end", function () {
          res.writeHead(302, { Location: "/" });
          res.end();
        });
        break;
      // u 버튼 로직
      case "/u_action":
        req.on("data", function (chunk) {
          const update = reqOnData(chunk);
          db_module(
            "update b set name = ?, type = ?, taek = ? where b_id = ?",
            update
          );
        });
        req.on("end", function () {
          res.writeHead(302, { Location: "/" });
          res.end();
        });
        break;
      // d 버튼 로직
      case "/d_action":
        req.on("data", function (chunk) {
          const deleteSet = reqOnData(chunk);
          db_module("delete from b where b_id = ?", deleteSet);
        });
        req.on("end", function () {
          res.writeHead(302, { Location: "/" });
          res.end();
        });
        break;
    }
  }
});

server.listen(2090, function (err) {
  if (err) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
});
