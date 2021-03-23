const poke = document.getElementById('pokedex');

// label styling
document.getElementById('pTypes').style.color = "yellow";

// fetch pokemon data from API
const getPokemon = () => {
    const promises = [];

    for (let i = 1; i <= 100; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url)
            .then(res => res.json()));
    }

    Promise.all(promises).then(result => {
        const pokemon = result.map((data) => ({
            id: data.id,
            name: data.name,
            image: data.sprites['front_default'],
        }));
        display(pokemon);
    })
}

const getPokemonStats = () => {
    const promises = [];

    for (let i = 1; i <= 100; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url)
            .then(res => res.json()));
    }

    Promise.all(promises).then(result => {
        const pokemon = result.map((data) => ({
            abilities: data.abilities,
        }));
        displayStats(pokemon);
    })
}

const display = (pokemon) => {
    // TODO add stats, types, and abilities
    const pokeString = pokemon.map(eachPokemon => `
    <li id="pId">
        <img src="${eachPokemon.image}" />
        <h3>${eachPokemon.id}. ${eachPokemon.name}</h3>
    </li>
    `).join("");
    poke.innerHTML = pokeString;
}

const displayStats = (pokemon) => {
    modal.style.display = "block";
    const pokeString = pokemon.map(eachPokemon => `
    <li>
        <h3>test</h3>
        <h3>Abilities: ${eachPokemon.abilities}</h3>
    </li>`).join("");
    poke.innerHTML = pokeString;
}

// types helper
function createTypes(types, ul) {
    types.forEach(function (type) {
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi);
    })
}

// stats helper
function stats() {
    // TODO add stats logic
}

getPokemon();