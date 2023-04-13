// module.exports = {
//   userDataObject : function(values) {
//     const firstSplit = values.split('&')
//     const secondSplit = {};
//     firstSplit.forEach(element => {
//       secondSplit.push(element.split('=')[0],element.split('=')[1])

//     });
//   }
// }

// function makeQuerystring (values) {
//   const decoding = decodeURIComponent(values)
//   const firSpl = decoding.split('&')
//   const secSpl = [];
//   for(let i = 0; i < firSpl.length;i++){
//     let valSpl = firSpl[i].split('=')
//     secSpl.push([valSpl[0],valSpl[1]])
//   }
//   const thiJsonStr = Object.fromEntries(secSpl)
//   return thiJsonStr;
// }

function makeQuerystring(values, firstSplit = "&", secondSplit = "=") {
  const decoding = decodeURIComponent(values);
  const firSpl = decoding.split(firstSplit);
  const secSpl = [];
  for (let i = 0; i < firSpl.length; i++) {
    let valSpl = firSpl[i].split(secondSplit);
    secSpl.push([valSpl[0], valSpl[1]]);
  }
  const thiJsonStr = Object.fromEntries(secSpl);
  return thiJsonStr;
}

export default makeQuerystring;
