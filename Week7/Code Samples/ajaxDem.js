// assign each of the buttons in the HTML file to a variable,
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

// Assign URL's
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

// Assign event handler to each button
// Number fact button:
textButton.addEventListener('click', () => {
    fetch(textURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for a response...';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.text())
    .then(text => outputDiv.innerText = text)
    .catch(error => console.log('There was an error:', error))
},false);

// chuck norris fact button:
apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for a response...';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(data => outputDiv.innerText = data.value)
    .catch(error => console.log('There was an error:', error))
},false);