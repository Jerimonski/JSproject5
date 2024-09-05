const SearchInput = document.getElementById("name_or_id_input");
const btn = document.getElementById("btn");
const pokemon_container = document.getElementById("pokemon_container");
const poke_stats = document.getElementById("poke_stats");


btn.addEventListener("click", () => {
    const API_URL = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${SearchInput.value}`;
    fetch(API_URL)
    .then(Response => Response.json())
    .then(data => {ShowData(data)})
    .catch(error => alert(error))
})
const ShowData = (data) => {
    pokemon_container.innerHTML = '';
    console.log(data.types.type); 
    let PokemonName = document.createRange().createContextualFragment(`
        <div class="img">
            <figure>
            <img src="${data.sprites.front_default}">
            <figcaption>${data.name} #${data.id}</figcaption>
            </figure>
        </div>
        ${data.types.map(obj => `<span class="${obj.type.name}">${obj.type.name}</span>`).join(' ')}
    `);
    // append stats to table_stats rows
    let PokemonStats = document.createRange().createContextualFragment(`
        ${data.stats.map(obj => `<span class="stats ${obj.base_stat}">${obj.base_stat}</span>`).join(' ')}
    `);
    //use this to create a span for each type and add classes 
// Set types
// types.innerHTML = data.types
// .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
// .join('');
    poke_stats.appendChild(PokemonStats);
    pokemon_container.appendChild(PokemonName);
}

    /*
        TODO: Change for loop, instead use just data.results.name or id,
        TODO: or look for a another way to solve bugs 
    */






