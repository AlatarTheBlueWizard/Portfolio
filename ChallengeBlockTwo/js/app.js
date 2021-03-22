const poke = document.getElementById('pokedex');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

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

/*const getPokemon = () => {
    for(let i = 1; i <= 50; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
    }
  }
  
  getPokemon(); */

const display = (pokemon) => {
    const pokeString = pokemon.map(eachPokemon => `
    <li>
        <img src="${eachPokemon.image}" />
        <h3>${eachPokemon.id}. ${eachPokemon.name}</h3>
    </li>`).join("");

    poke.innerHTML = pokeString;
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

function displayStats() {
   // TODO display stats in modal
}

// event listener to display stats
document.getElementById('pokedex').addEventListener("click", displayStats);

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

getPokemon();