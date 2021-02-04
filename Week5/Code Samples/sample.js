/***********************************
 * Exceptions
 **********************************/
/*An exception is an error that produces a 
return value that can then be used by the program 
to deal with the error*/

/*Trying to call this method (which doesn't exist)
will produce a reference error that will raise an
exception*/
thisMethodDoesntExist();

/***********************************
 * Stack Traces
 **********************************/
/*A stack trace is a sequence of functions or method 
calls that lead to the point where the error occurred.
A stack trace will work backwards from the point at which 
the error occurred to identify the original function or 
method that started the sequence*/

function third() { peskyMethod(); } // invokes peskyMethod which doesnt exist and produces error
function second() { third(); } // invokes function 'third'
function first() { second(); } // invokes function 'second'
first(); // work backwards and see this error was caused by invoking first();

/***********************************
 * Using Alerts
 **********************************/
/*Because alert() stops a program from running until OK is clicked, it 
allows us to effectively put breakpoints in the code that let us check 
the value of variables at that point to see if they’re what we expect 
them to be.*/

// check to see if a person's age is appropriate
function amIOldEnough(age) {
    if (age < 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'You may enter.';
    }
}

//amIOldEnough(21); call in the console or paste to view the result!

/***********************************
 * Console Debugging
 **********************************/
/*we could add some console.log() statements in the amIOldEnough()
function, to log the position in the function as well as the value 
of the age variable:*/
function amIOldEnough(age) {
    console.log(age);
    if (age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.';
    } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
    } else {
        console.log(`In the else with ${age}`);
        return 'You may enter.';
    }
}

//amIOldEnough(21); call in the console or paste to view the result!

/***********************************
 * Error Objects
 **********************************/
/*An error object can be created by the host environment when an 
exception occurs, or it can be created in the code using a constructor 
function, like so:*/
//This constructor function takes a parameter that’s used as the error message:
const error = new Error('Something went wrong!');

//These error objects can also be used as constructors to create custom error objects:
const errorSecond = new TypeError('Must use numbers in this function!');

/***********************************
 * Throwing Exceptions
 **********************************/
/*It’s possible to throw your own exceptions using the throw statement. This will 
allow for any problems in your code to be highlighted and dealt with, rather 
than lurk quietly in the background.*/

// this will cause the program to hault:
throw new Error('Something has gone badly wrong!');

//This function will throw an error if the user tries to use a negative argument:
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError('You cannot find the square root of negative numbers!');
    }
    return Math.sqrt(number);
}

//squareRoot(-10); call in the console or paste to view the result!

/***********************************
 * Try, Catch and Finally
 **********************************/
/* A try block can be used if there is a suspected piece of code that will result
in an exception. The code in the block will run as normal, but if an exception
occurs it will pass the error object that is thrown onto a catch block.*/
function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+'i'; // will only run if an exception is thrown in the try block
    } finally {
        return `+ or - ${answer}`; // will always execute regardless of whether an exception is thrown or not
    }
}

//imaginarySquareRoot(-49); call in the console or paste to view the result!

/***********************************
 * Tests
 **********************************/
//A test can simply be a function that tests a piece of code runs as it should

//test the squareRoot() function
function isSquareRoots4() {
    return squareRoot(4) === 2;
}

//compare the result of squareRoot(4) with 2, should return true
//isSquareRoots4(); call in the console or paste to view the result!