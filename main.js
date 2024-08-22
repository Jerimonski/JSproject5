const API_URL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon?limit=5';


fetch(API_URL)
.then(Response => Response.json())
.then(data => {ShowData(data)})
.catch(error => console.log(error))

const ShowData = (data) => {
    // create a node that append name and id to poke_image div
    const pokeName = document.createRange().createContextualFragment(`
        <span>id: ${data.results[68].id}</span>
        <span>name: ${data.results[69].name}</span>
    `);

    const image_pokemon = document.getElementById("poke_image");
    image_pokemon.append(pokeName);

    // console.log each pokemon name 
    // for (let i = 0; i < 5; i++) {
    //     console.log(data.results[i].name);
    // }

//     same but using forEach
//     data.results.forEach(pokemon => {
//         console.log(pokemon.name);
//     });
}
