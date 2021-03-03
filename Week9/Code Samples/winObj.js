/****************************************************
 * Global Vars Refresher
 ***************************************************/
/*
- Global vars are actual properties of a global obj
- In a browser env, the global obj is the window obj
- Any global var created is actually a property of
  the window obj
*/
x = 6;                       // global var created
window.x;                    // same var can be accessed as a property of the window obj
console.log(window.x === x); // both vars are exactly the same

/*
- Some functions such as parseInt() and isNaN() are 
  actually methods of the global object (window)
*/
console.log('Parsed: ' + window.parseInt(4.2));
console.log(window.isNaN(4.2));

/****************************************************
 * Dialogs
 ***************************************************/
/*
- The window.alert() method will pause the execution
  of the program and display a message in a dialog
  box. Undefined is always returned.
*/
window.alert('Hello');

/*
- The window.confirm() method will stop the execution
  of the program and display a confirmation dialog that
  shows the message provided as an argument, and giving 
  the options of OK or Cancel.
*/
window.confirm('Do you wish to continue?');

/*
- The window.prompt() method will stop the execution of the 
  program. It displays a dialog that shows a message provided 
  as an argument, as well as an input field that allows the user 
  to enter text. This text is then returned as a string when the 
  user clicks OK. If the user clicks Cancel, null is returned
*/
window.prompt('Please enter your name:');

/****************************************************
 * Which Browser?
 ***************************************************/
/*
- The window object has a navigator property that returns a 
  reference to the Navigator object. The Navigator object contains 
  information about the browser being used. Its userAgent property 
  will return information about the browser and operating system being 
  used
*/
console.log('Browser info: ' + window.navigator.userAgent);

/****************************************************
 * Location
 ***************************************************/
/*
- The window.location property is an object that contains information 
  about the URL of the current page. It contains a number of properties 
  that provide information about different fragments of the URL.
*/
console.log('Location: ' + window.location.href);

/****************************************************
 * Screen Information
 ***************************************************/
/*
- The window.screen object contains information about the screen the browser 
  is displayed on. You can find out the height and width of the screen in pixels 
  using the height and width properties
*/
console.log('Screen height: ' + window.screen.height);
console.log('Screen width: ' + window.screen.width);

// The availHeight and availWidth can be used to find the height and width of the 
// screen, excluding any operating system menus:
console.log('Avail width: ' + window.screen.availWidth);
console.log('Avail height: ' + window.screen.availHeight);

// The colorDepth property can be used to find the color bit depth of the user’s monitor, 
// although there are few use cases for doing this other than collecting user statistics
console.log('Screen color bit depth: ' + window.screen.colorDepth);

/****************************************************
 * Creating Cookies
 ***************************************************/
// To create a cookie, you assign it to JavaScript’s “cookie jar”, using the document.cookie property
document.cookie = 'name=Superman';
// Append more cookies by assigning them to document.cookie
document.cookie = 'hero=true';
document.cookie = 'city=Metropolis';

// A cookie’s value can be changed by reassigning it to document.cookie using the same name but a different value
document.cookie = 'name=Batman';
document.cookie = 'city=Gotham';
document.cookie = 'SameSite=None; Secure';

// To see the current contents of the cookie jar, simply enter document.cookie
console.log('Cookie: ' + document.cookie);

// Can use the split method to break the string into an array containing each name/value pair, 
// then use a for of loop to iterate through the array
const cookies = document.cookie.split("; ");
for (crumb of cookies) {
    const [key, value] = crumb.split("=");
    console.log(`The value of ${key} is ${value}`);
}

/*
- Cookies are session cookies by default. This means they are deleted once a browser session
  is finished (when the user closes the browser tab or window). Cookies can be made persistent
   ― that is, lasting beyond the browser session ― by adding "; expires=date" to the end of the
   cookie when it’s set, where date is a date value in the UTC String format Day, DD-Mon-YYYY HH:MM:SS GMT
*/
// set to expire in one day
const expiryDate = new Date();
const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
expiryDate.setTime(tomorrow);

document.cookie = `name=Batman; expires=${expiryDate.toUTCString()}`;

// delete cookie by setting it to expire at a time in the past (will expire once tab or window is closed)
document.cookie = 'name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT';

/****************************************************
 * Animation
 ***************************************************/
/*
- The setTimeOut() and setInterval() methods can be used to animate 
  elements on a web page
*/

/*use the setInterval() method to increase the value of angle by 2 (we also use the % operator so 
/ that it resets to 0 at 360), then set the transform CSS3 property to rotate that number of degrees. 
/ The second argument is 1000/60 , which equates to a frame speed of 60 frames per second
const squareElement = document.getElementById('square');
let angle = 0;
setInterval(() => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000 / 60);*/

/*
place the rotation code inside a function called rotate . The last line of this function uses 
the window.requestAnimationFrame() method and takes the rotate() function as an argument. This 
will then call the rotate() function recursively. The frame rate cannot be set using requestAnimationFrame() 
; it’s usually 60 frames per second, although it’s optimized for the device being used.

To start the animation, we need to call the requestAnimationFrame() method, giving the rotate() function as 
an argument. This will return a unique ID that can be employed to stop the animation using the 
window.cancelAnimationFrame() method
*/
const squareElement = document.getElementById('square');
let angle = 0;
function rotate() {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);
//cancelAnimationFrame(id);