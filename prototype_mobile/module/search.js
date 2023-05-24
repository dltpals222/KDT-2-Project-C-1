export async function fetchData(path) {
  const result = await fetch(path);
  return result.json();
}
