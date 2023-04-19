import fs from "fs";
import qs from "querystring";

function userDataWriteFile(value) {
  let valueQs = new qs.parse(value);
  console.log("valueQs로그", valueQs);
  let valueStringify = JSON.stringify(valueQs);
  console.log("valueStringify로그", valueStringify);
  // let valueStringifyToParse = JSON.parse(valueStringify);
  // console.log(valueStringifyToParse);

  fs.access("../JSON/userDate.json", fs.constants.F_OK, (err) => {
    if (err) {
      //파일 있는지 확인 후 파일이 없을때 실행
      fs.writeFile("../JSON/userDate.json", valueStringify, (err) => {
        if (err) {
          console.error("파일 생성에 실패하였습니다.", err);
        } else {
          console.log("파일이 생성되었습니다.");
        }
      }); //파일 생성 종료
    } else {
      fs.readFile(
        "../JSON/userDate.json",
        "utf-8",
        (err, data) => {
          if (err) {
            console.error("파일을 읽어오는데 실패했습니다.", err);
          } else {
            let userDataFile = JSON.parse(data);
            console.log("기존데이터", data);
            // userDataFile.push(JSON.parse(valueStringify));
            // userDataFile.push(JSON.parse(valueStringify));
            console.log("userDataFile 데이터", userDataFile);

            fs.writeFile(
              "../JSON/userDate.json",
              JSON.stringify(userDataFile),
              (err) =>
                console.error("새로운 자료를 추가하는데 실패하였습니다.", err)
            );
          }
        } //readFile 화살표함수 끝
      ); //readFile 끝
    } //access if else 끝
  }); //fs.access끝
} //userDataWriteFile 끝

export default userDataWriteFile;

//임시 저장용
// fs.readFile("../JSON/userDate.json", "utf-8", (err, data) => {
//   console.log(typeof data);
//   if (err) throw err;

//   if (typeof data === "undefined") {
//     fs.writeFile("../JSON/userDate.json", value, (err) => {
//       console.error(err);
//     });
//   } else {
//     let userDateParse = [];
//     userDateParse.push(JSON.parse(data), value);

//     fs.writeFile(
//       "../JSON/userDate.json",
//       JSON.stringify(userDateParse),
//       (err) => {
//         if (err) throw err;
//         console.log("데이터가 정상적으로 저장됐습니다.");
//       }
//     ); //fs.writeFile 끝
//   } //else 끝
// });

//이건 안쓸듯
// function userDataWriteFile (value){
//   fs.appendFile('../JSON/userDate.json',value,(err) => {console.error(err)})
// }
