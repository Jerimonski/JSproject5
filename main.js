const SearchInput = document.getElementById("name_or_id_input");
const btn = document.getElementById("btn");
const pokemon_container = document.getElementById("pokemon_container");

const hp_ = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

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
            <img class="poke_img" src="${data.sprites.front_default}">
            <figcaption>${data.name} #${data.id}</figcaption>
            </figure>
        </div>
        ${data.types.map(obj => `<span class="types ${obj.type.name}">${obj.type.name}</span>`).join(' ')}
    `);
    
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    pokemon_container.appendChild(PokemonName);
}






