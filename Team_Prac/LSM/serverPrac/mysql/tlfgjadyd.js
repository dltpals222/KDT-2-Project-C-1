import makeQuerystring from "./makeQuerytring";
import usersDataToStringify from "./mysqlStringify";
import userDataWriteFile from "../modules/userDataWriteFile";
import dbpost from "./DBPost";
import qs from "querystring";
// const userdataJ = require('../JSON/userDate')

const aaaaa = qs.parse(
  "name=%E3%85%81%E3%84%B4%E3%85%87%E3%84%B9&Phone=1274&email=%E3%85%81%E3%84%B4%E3%85%87%E3%84%B9"
);
console.log(aaaaa);
const bbbbb = JSON.stringify(aaaaa, null, 2);
console.log(bbbbb);
let database = [];
database.push(bbbbb);
userDataWriteFile(bbbbb);

console.log(database);

// dbpost(userdataJ)
