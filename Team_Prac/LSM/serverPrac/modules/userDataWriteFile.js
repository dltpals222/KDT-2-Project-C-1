const fs = require("fs");

function userDataWriteFile(value) {
  fs.readFile("../JSON/userDate.json", "utf-8", (err, data) => {
    if (err) throw err;
    const userDateParse = JSON.parse(data);
    const newUserDate = new value();
    userDateParse.push(newUserDate);

    fs.writeFile(
      "../JSON/userDate.json",
      JSON.stringify(userDateParse),
      (err) => {
        if (err) throw err;
        console.log("데이터가 정상적으로 저장됐습니다.");
      }
    );
  });
}
// function userDataWriteFile (value){
//   fs.appendFile('../JSON/userDate.json',value,(err) => {console.error(err)})
// }

module.exports = userDataWriteFile;
