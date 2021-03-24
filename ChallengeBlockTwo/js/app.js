const poke = document.getElementById('pokedex');
const pName = document.getElementById('name');

// label styling
document.getElementById('pTypes').style.color = "yellow";

// fetch pokemon data from API
const getPokemon = () => {
    const promises = [];

    for (let i = 1; i <= 20; i++) {
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

const display = (pokemon) => {
    // TODO add stats, types, and abilities
    const pokeString = pokemon.map(eachPokemon => `
    <li>
        <img src="${eachPokemon.image}" />
        <h3>${eachPokemon.id}. ${eachPokemon.name}</h3>
    </li>
    `).join("");
    const statString = pokemon.map(eachPokemonTwo => `
    <h3>${eachPokemonTwo.name}</h3>
    `).join("");
    pName.innerHTML = statString;
    poke.innerHTML = pokeString;
    poke.addEventListener("click", toggleModal);
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

// modal functionality
var btn = document.getElementById('modal_opener');
var li = document.getElementById('pId');
var modal = document.querySelector('.modal');

function attachModalListeners(modalElm) {
    modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
    modalElm.querySelector('.overlay').addEventListener('click', toggleModal);
}

function detachModalListeners(modalElm) {
    modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
    modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
}

function toggleModal() {
    var currentState = modal.style.display;

    // If modal is visible, hide it. Else, display it.
    if (currentState === 'none') {
        modal.style.display = 'block';
        attachModalListeners(modal);
    } else {
        modal.style.display = 'none';
        detachModalListeners(modal);
    }
}

getPokemon();