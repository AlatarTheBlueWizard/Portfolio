document.addEventListener("DOMContentLoaded", () => {

    let generateBtn = document.querySelector('#generate-pokemon');
    generateBtn.addEventListener('click', renderEverything)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderEverything() {
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchPokemon();

    getDeleteBtn().style.display = 'block'
}

function getDeleteBtn() {
    return document.querySelector('#delete-btn')
}

function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (allpokemon) {
            allpokemon.results.forEach(function (pokemon) {
                fetchPokemonData(pokemon);
            })
        })
}

function fetchPokemonData(pokemon) {
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
    //Example: https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
        .then(response => response.json())
        .then(function (pokeData) {
            renderPokemon(pokeData)
        })
}

function renderPokemon(pokeData) {
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    let singlePoke = document.createElement("div");
    let statButtons = document.querySelectorAll('.sButton');
    let remButtons = document.querySelectorAll('.rButton');
    let classes = document.querySelectorAll('.card'), i;

    singlePoke.setAttribute("id", "hovePoke");

    pokeContainer.classList.add('card');

    for (let i = 0; i < classes.length; i++) {
        classes[i].classList.add('card-' + i);
    }

    for (let i = 0; i < statButtons.length; i++) {
        statButtons[i].classList.add('sButton-' + i);
    }

    for (let i = 0; i < remButtons.length; i++) {
        remButtons[i].classList.add('rButton-' + i);
    }

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = `${pokeData.name}`;

    let statButton = document.createElement('button');
    statButton.innerText = "View stats";
    statButton.setAttribute("class", "sButton");

    let remStat = document.createElement('button');
    remStat.innerText = "Close stats";
    remStat.setAttribute("class", "rButton");

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`

    let baseExperience = document.createElement('h5')
    baseExperience.innerText = `Base Experience: ${pokeData.base_experience}`;

    let statExperience = document.createElement('h5')
    statExperience.innerText = `Stats:`;

    let typeTitle = document.createElement('h5');
    typeTitle.innerText = 'Type(s):';

    let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types
    let pokeStats = document.createElement('ul');

    createTypes(pokeData.types, pokeTypes); // helper function to go through the types array and create li tags for each one
    createStatistics(pokeData.stats, pokeStats);

    pokeContainer.append(pokeName, pokeNumber, statButton, remStat);   //appending all details to the pokeContainer div
    singlePoke.append(baseExperience, statExperience, pokeStats, typeTitle, pokeTypes);
    allPokemonContainer.appendChild(pokeContainer);  //appending that pokeContainer div to the main div which will hold all the pokemon cards

    statButton.addEventListener("click", function() {
        pokeContainer.appendChild(singlePoke);
        singlePoke.style.display = "block";
    })

    remStat.addEventListener("click", function () {
        singlePoke.style.display = "none";
    })
}

function createTypes(types, ul) {
    types.forEach(function (type) {
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv) {
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

function createStatistics(stats, ul) {
    stats.forEach(function (stat) {
        let statLi = document.createElement('li');
        statLi.innerText = stat['stat']['name'] + ': ' + stat['base_stat'];
        ul.append(statLi);
    })
}

function deleteEverything(event) {
    event.target.style = 'none';
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = ""

    let generateBtn = document.createElement('button')
    generateBtn.innerText = "Generate Pokemon"
    generateBtn.id = 'generate-pokemon'
    generateBtn.classList.add('ui', 'secondary', 'button')
    generateBtn.addEventListener('click', renderEverything);

    allPokemonContainer.append(generateBtn)
}