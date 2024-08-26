const SearchInput = document.getElementById("name_or_id_input");
const btn = document.getElementById("btn");
const pokemon_container = document.getElementById("pokemon_container");


btn.addEventListener("click", () => {
    const API_URL = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${SearchInput.value}`;
    fetch(API_URL)
    .then(Response => Response.json())
    .then(data => {ShowData(data)})
    .catch(error => console.log(error))
})
const ShowData = (data) => {
    pokemon_container.innerHTML = '';
    let PokemonName = document.createRange().createContextualFragment(`
        <img src="${data.sprites.front_default}">
    `);
    let divContainer = document.createElement('div');
    divContainer.appendChild(PokemonName);
    pokemon_container.appendChild(divContainer);
}

    /*
        TODO: Change for loop, instead use just data.results.name or id,
        TODO: or look for a another way to solve bugs 
    */






