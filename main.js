const API_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";


fetch(API_URL)
.then(rest => rest.json())
.then(Response => {console.log(Response)})
