export async function fetchData(path) {
  const result = await fetch(path);
  return result.json();
}

export function filter() {
  let inputValue = document.getElementById("hs-input").value;
  return inputValue;
}
