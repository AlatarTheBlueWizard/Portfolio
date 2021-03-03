/*****************************************************
 * HTML5 Web Storage
 ****************************************************/
/*
- The Web Storage API provides a key-value store on the client’s 
  computer that is similar to using cookies but has fewer restrictions, 
  more storage capacity, and is generally easier to use.
- If a browser supports the Web Storage API, the window object will have 
  a property called localStorage , which is a native object with a number 
  of properties and methods used to store data. The information is saved 
  in the form of key-value pairs, and the values can only be strings. 
  There is also a sessionStorage object that works in the same way, although 
  the data is only saved for the current session.
*/

// ex of storing information
localStorage.setItem('name', 'Billy Bob');

// ref localStorage.name to change its value
localStorage.name = 'John Johnson'
console.log(localStorage.name);

// To remove an entry from local storage, use the removeItem method:
localStorage.removeItem('name');

// To completely remove everything stored in local storage, use the clear() method:
localStorage.clear();

// add an event listener that logs information about any changes to the Web Storage
addEventListener('storage', (event) => {
    console.log(`The ${event.key} was updated from ${event.oldValue} to ${event.newValue} and saved in 
    ${event.storageArea}`)
}, false);

/*****************************************************
 * Geolocation
 ****************************************************/
/*
- The Geolocation API is used to obtain the geographical position 
  of the device. This means it can be used to find the user’s exact 
  location, then link to nearby places or measure the speed at which 
  the user is moving. This information can then be used to filter data 
  based on the user's location or speed and direction of travel
*/

// If geolocation is available, it will be a property of the navigator object
// This property has a method called getCurrentPosition() that will return a 
// position object to a specified callback function
navigator.geolocation.getCurrentPosition(youAreHere);

// show an alert dialog that displays the user’s coordinates:
function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}

/*
- the geolocation object has a watchPosition() method that will call a 
  callback function every time the position of the device is updated. 
  This method returns an ID that can be used to reference the position 
  being watched:
*/
const id = navigator.geolocation.watchPosition(youAreHere);

// The clearWatch() method can be used to stop the callback being called, 
// using the ID of the watch as an argument:
navigator.geolocation.clearWatch(id);

/*****************************************************
 * Websockets
 ****************************************************/
/*
- Websocket is a new protocol that allows two-way communication with a
  server – also known as push messaging. This means that a connection
  is kept open and responses are ‘pushed’ to the client as soon as they
  are received.
*/
const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

// output messages to the screen
function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

// event listener to deal with when the form is submitted
form.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}

// event handler to deal with the response
connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
},false);

/*****************************************************
 * Notifications
 ****************************************************/
/*
- The Notification API allows you to show messages using the system's 
  notifications. This is usually a popup in the corner of the screen, 
  but it changes depending on the operating system. An advantage of 
  using the system notification is that they will still be displayed 
  even if the web page that calls them isn't the current tab.
- Before you can send notifications, you need to get permission granted 
  by the user. This can be achieved using the requestPermission() method 
  of a Notification global object.
*/
if(window.Notification) {
    Notification.requestPermission();
}

// If it’s set to granted, you can create a new notification using a constructor function
if(window.Notification) {
    Notification.requestPermission()
    .then((permission) => {
        if(Notification.permission === 'granted') {
            new Notification('Hello JavaScript!');
        }
    });
}

