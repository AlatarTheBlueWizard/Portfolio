/*********************************************
* Basic Usage
********************************************/
/* The Fetch API provides a global fetch() method 
that only has one mandatory argument, which is the 
URL of the resource you wish to fetch. A very basic 
example would look something like the following piece 
of code:*/
//fetch('https://example.com/data')
//.then( // code that handles the response )
//.catch( // code that runs if the server returns an error )

/*********************************************
* Responses
********************************************/
/* 
200 - successful
201 - resource was created
204 - request is successful but no content is returned

The 'ok' property will return true if the property is 
between 200 and 299.

can use an 'if' block to check if the request was successful,
throw otherwise
*/

const url = 'ajax.html'; // used to output successful response
const url_two = 'http:google.com';
const newURL = 'ajax.html';

fetch(url)
.then((response) => {
    if (response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then(response => console.log('yay a response'))
.catch(error => console.log('There was an error!'))

/*********************************************
* Redirects
********************************************/
/*
The redirect() method can be used to redirect to 
another URL. It creates a new promise that resolves 
to the response from the redirected URL.

As of now there is no support for redirect() in any browser
*/

fetch(url_two)
.then(response => response.redirect(newURL)) // redirect to another URL
.then(console.log('Yay the redirect worked!'))
.catch(error => console.log('There was an error: ', error))

/*********************************************
* Creating Response Objects
********************************************/
/* 
first argument: data that is to be returned
second argument: object that can be used to
provide values for any of the properties

can be useful when creating API's that need
to send a response, or if a dummy response
is needed for testing
*/
const response = new Response( 'Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});

fetch(response)
.then(console.log('Dummy response works!'))
.catch(error => console.log('There was an error: ', error))