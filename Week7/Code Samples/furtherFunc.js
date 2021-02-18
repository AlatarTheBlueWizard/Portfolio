/*********************************************
 * Call and Apply Methods
 ********************************************/
/*The call() method can be used to set the value of 
this inside a function to an object that is provided 
as the first argument.*/

// function that refers to an unspecific object called
// 'this' that has a property called 'name':
function sayHello() {
    return `Hello, my name is ${this.name}`;
}

// use call() method to invoke sayHello(), providing each
// object as an argument, hence taking the value of 'this'
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
sayHello.call(clark); // run in console
sayHello.call(bruce); // run in console

// If the function that’s called requires any parameters, 
// these need to be provided as arguments after the first 
// argument, which is always the value of 'this'
function sayHello(greeting = 'Hello') {
    return `${greeting}, my name is ${this.name}`;
}

console.log(sayHello.call(clark, 'How do you do?')); // run in console
console.log(sayHello.call(bruce)); // run in console

/*********************************************
 * Memoization
 ********************************************/
/* using memoization (aka result caching), you can
 save the result in a cache property. If the same 
 argument is used again later, we can return the 
 value from the cache, rather than having to compute the result again.*/

// square function that saves each result in a cache object that is
// a property of the function
function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x]
}

// call the function in the console to view the stored results in the cache obj
square(3);
square(-11);
console.log(square.cache);

/*********************************************
* Temporary Variables
********************************************/
/* Placing any code that uses the temporary variable 
inside an IIFE will ensure it’s only available while 
the IIFE is invoked, then it will disappear.*/

// Use an IIFE to swap two global variables. This requires
// the use of a temp variable which will only exist while
// the IIFE is invoked:
let a = 1;
let b = 2;

// IIFE (Immediately Invoked Function Expression)
(() => {
    const temp = a;
    a = b;
    b = temp;
})();

// 'temp' will not be defined
console.log(a);
console.log(b);
//console.log(temp);

/*********************************************
* Initialization Code
********************************************/
/* An IIFE can be used to set up any initialization 
code that there’ll be no need for again. Because the 
code is only run once, there’s no need to create any 
reusable, named functions, and all the variables will 
also be temporary. An IIFE will be invoked once, and 
can set up any variables, objects and event handlers 
when the page loads. */

// logs a welcome message to the console, then eliminates
// all temporary variables used in putting the message 
// together:
(function () {
    const name = 'Peter Parker';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(), today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();

/*********************************************
* Self-contained Code Blocks
********************************************/
/* An IIFE can be used to enclose a block of code inside 
its own private scope so it doesn’t interfere with any other 
part of the program. Using IIFEs in this way means code can 
be added or removed separately.*/

// Two blocks that are able to run code independently of each other
(function () {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
}());
(function () {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());

/*********************************************
* Event-driven Asynchronous Programming
********************************************/
/* Callbacks can be used to facilitate event-driven
asynchronous programming. JavaScript is a single-threaded
environment, which means only one piece of code will ever
be processed at a time*/

/*Instead of waiting for an event to occur, a callback can 
be created that’s invoked when the event happens. This means 
that the code is able to run out of order, orasynchronously*/

/*By using callbacks, we ensure that waiting for these tasks to 
complete doesn't hold up the execution of other parts of the program. 
Once the task has been completed, the callback will be invoked before 
returning to the rest of the program.*/

// function called wait() that accepts a callback. To simulate an 
// operation that takes some time to happen, we can use the setTimeout() 
// function to call the callback after a given number of seconds:
function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}

// callback function
function selfDestruct() {
    console.log("BOOM!");
}

// invoking wait() then log a message, will now work asynchronously
wait('This tape will self-destruct in five seconds...', selfDestruct, 5);
console.log('Should you choose to accept it...');

/*********************************************
* Creating A Promise
********************************************/
/* A promise is created using a constructor function. 
This takes a function called anexecutoras an argument. 
The executor initializes the promise and starts the 
asynchronous operation.*/

// general layout of a promise
/*const promise = new Promise((resolve, reject) => {
    // init goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});*/

// Promise using dice object:
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

// use dice.roll as the async operation (1 is a failure):
const promise = new Promise((resolve, reject) => {
    const n = dice.roll();
    if (n > 1) {
        setTimeout(() =>{resolve(n)}, n*200);
    } else {
        setTimeout(() => reject(n), n*200);
    }
});

promise.then(result => console.log(`I rolled a ${result}`)).catch(result => console.log(`Curses... I rolled a ${result}`));
console.log('After the roll');

/*********************************************
* Functions Returning Other Functions
********************************************/
// take a particular greeting as a param, then return
// a more specific greeting function:
function greeter(greeting='Hello') {
    return function() {
        console.log(greeting);
    }
}

const englishGreeter = greeter();
englishGreeter();

const frenchGreeter = greeter('Bonjour');
frenchGreeter();

const germanGreeter = greeter('Guten Tag');
germanGreeter();