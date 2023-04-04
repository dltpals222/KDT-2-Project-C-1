const fs = require('fs')

// function userDataWriteFile (value){
//   fs.writeFile('../JSON/userDate.json',value,(err) => {console.error(err)})
// }
function userDataWriteFile (value){
  fs.appendFile('../JSON/userDate.json',value,(err) => {console.error(err)})
}

module.exports = userDataWriteFile;
