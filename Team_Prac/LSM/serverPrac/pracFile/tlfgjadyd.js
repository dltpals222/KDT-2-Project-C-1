let a = [];

let user = { name: "lee", age: 1, num: 2 };

a.push(user);

// console.log(a);

let inAdd = { name: "se", age: 2, num: 12 };

a.push(inAdd);

// console.log(a);

let inAdd2 = { name: "min", age: 3, num: 112 };

a.push(inAdd2);

// console.log(a);

const aStringify = JSON.stringify(a);

// console.log(aStringify);

const bParse = JSON.parse(aStringify);

// console.log(bParse);

let inAdd3 = { name: "leese", age: 5, num: 1221 };

// const c = bParse + inAdd3;

bParse.push(inAdd3);

console.log(bParse);

const cStringify = JSON.stringify(bParse);
console.log(cStringify);

const cStringifyToParse = JSON.parse(cStringify);
console.log(cStringifyToParse);

// import fs from "fs";

// fs.readFile("../JSON/userDate.json", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   console.log(JSON.parse(data));
// });
