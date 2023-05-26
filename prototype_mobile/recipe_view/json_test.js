fetch(
  `http://openapi.foodsafetykorea.go.kr/api/ea64844179af470daeb3/COOKRCP01/json/1/2`
).then(function(response) {
  return response.json();
}).then(function (json) {
  // 2
  console.log(JSON.stringify(json));

  // 3
  showHeroes(json);

}).catch(function(error) {
  console.log(error);
});


function showHeroes(jsonObj) {
  let recipe = jsonObj['row'];
  

}
//console.log(row[0]);