export function getGamesList() {
  let endpoint =
    "https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/gamesext";
  return fetch(endpoint, {
    method: "get"
  })
    .then(response => response.json())
    .then(jsonResponse => jsonResponse)
    .catch(ex => {
      console.log(ex);
    });
}
