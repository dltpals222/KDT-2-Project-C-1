export async function fetchData(path) {
  const result = await fetch(path);
  return result.json();
}

export function promiseFilter(dataArr) {
  const recipeListData = dataArr[0].map((value) => value.recipe_title);
  const recipeIngredients = dataArr[1].ingredients;

  function filter() {
    let inputValue = document.getElementById("hs-input").value;
    console.log(inputValue);
  }
  return filter;
}
