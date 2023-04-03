const a = [1,2,3,4,5]
const b = a
const aa = [6,7,8,9,0]

aa.forEach(element => {
  a.push(element)
})


console.log(a)
console.log(b)