import mysql from "mysql";
import dbconfig from "./dbconfig.js";
import mysqlInsertModule from "../server/mysqlQuerymodule.js";

class saveJSONToDatabase {
  constructor(bodyStringify) {
    this.bodyStringify = bodyStringify;
  }

  start() {
    const database = mysql.createConnection(dbconfig);

    database.connect((err) => {
      if (err) {
        console.error("연결실패", err);
      } else {
        console.log(`${dbconfig.port} 연결 성공`);
      }
    }); //connet 연결

    //객체화
    const usersDateParse = JSON.parse(this.bodyStringify);
    const values = usersDateParse.forEach((value) => {
      value.name, value.phone, value.email;
    });
    console.log(values);

    //쿼리실행
    database.query(mysqlInsertModule, values, (err, results) => {
      if (err) {
        console.error("쿼리실행 실패", err);
      } else {
        console.log("결과물 확인", results);
      }

      //연결종료
      connetion.end();
    });
  }
}

export default saveJSONToDatabase;
