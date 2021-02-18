/*********************************************
* Flattening
********************************************/
let arrays = [[1,2,3],[4,5],[6]];
console.log("Flattened 2D Array: " + arrays.reduce((flat, current) => flat.concat(current), []));

/*********************************************
* Your Own Loop
********************************************/
function loop(start, test, update, body) {
    for(let value=start; test(value); value=update(value)) {
        body(value);
    }
}

loop(5, n => n > 0, n => n - 1, console.log);

/*********************************************
* Everything
********************************************/
function every(array, predicate) {
    for(let ele of array) {
        if(!predicate(ele)) return false;
    }
    return true;
}

console.log("Are all numbers in the array < 10?" + ' ' + every([1,3,5], n => n < 10)); // all < 10 will return true
console.log("Are all numbers in the array < 10?" + ' ' + every([2,4,16], n => n < 10)); // 16 ! < 10 will return false
console.log("Are all numbers in the array < 10?" + ' ' + every([], n => n < 10)); // nothing is < 10 will return true

/*********************************************
* Check If Zero
********************************************/
function checkNum(x) {
    return n => x(n);
}
const isZero = checkNum(p => p === 0 ? true : false);
console.log("Is the number 0?" + ' ' + isZero(3));
console.log("Is the number 0?" + ' ' + isZero(0));