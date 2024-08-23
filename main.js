const API_URL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';
const SearchInput = document.getElementById("name_or_id_input");
const btn = document.getElementById("btn");
const pokemon_container = document.getElementById("pokemon_container");

fetch(API_URL)
.then(Response => Response.json())
.then(data => {ShowData(data)})
.catch(error => console.log(error))

const ShowData = (data) => {
    // click trigger, find pokemon using name or id
    btn.addEventListener("click", () =>{
        pokemon_container.innerHTML = '';
        for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].name === SearchInput.value.toLowerCase()
            || data.results[i].id === Number(SearchInput.value)){  
                let PokemonName = document.createRange().createContextualFragment(`
                    <span>name: ${data.results[i].name}</span>
                `);
                let divContainer = document.createElement('div');
                divContainer.appendChild(PokemonName);
                pokemon_container.appendChild(divContainer);

            } else{
                alert(`Pokemon id(${data.results[i].id}) Not found`);
            }
        } 
        SearchInput.value = '';
    })

    /*
        TODO: Change for loop, instead use just data.results.name or id,
        TODO: or look for a another way to solve bugs 
    */



    // <div class="poke_image" id="poke_image"></div>

    // myElement.id = "my-id"; 
    // myElement.classList.add("my-class"); 


    // create a node that append name and id to poke_image div
    // for (let i = 0; i < 5; i++) {
    //     console.log(data.results[i].name);
    //     spanPokeName.innerHTML += `${data.results[i].name}`;
    // }

//     same but using forEach
//     data.results.forEach(pokemon => {
//         console.log(pokemon.name);
//     });
}







