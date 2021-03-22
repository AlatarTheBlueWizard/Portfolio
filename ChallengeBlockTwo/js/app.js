const poke = document.getElementById('pokedex');

// fetch pokemon data from API
const getPokemon = () => {
    const promises = [];

    for(let i = 1; i <= 100; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url)
        .then(res => res.json()));
    }

    Promise.all(promises).then(result => {
        const pokemon = result.map((data) => ({
            id: data.id,
            name: data.name,
            image: data.sprites['front_default'],
            // TODO add spec info other than name and img
        }));
        display(pokemon);
    })
}

const display = (pokemon) => {
    const pokeString = pokemon.map(eachPokemon => `
    <li>
        <img src="${eachPokemon.image}" />
        <h3>${eachPokemon.id}. ${eachPokemon.name}</h3>
    </li>`).join("");

    poke.innerHTML = pokeString;
}

getPokemon();