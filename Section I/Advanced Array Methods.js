'use strict';

/* 
CALLBACKS

function add (x,y) {}
function subtract () {}
function multiply () {}
function divide () {}

const mathFuncs = [add, subract, multiply, divide]

mathFuncs[3](4,5)


forEach:

* Loops through an array.
* Runs a callback function for each value in the array and then returns undefined.
* forEach will always return undefined - no matter what.

*/

/*

const colors = ['teal', 'cyan', 'peach', 'purple'];

// the arr will result in entire arrays and is rarely used.
colors.forEach(function (val, i, arr) {
  const caps = val.toUpperCase();
  console.log(`At index ${i}, ${caps}`);
  console.log(arr);
});

// for Each ----------------------------------------------------------

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
prices.forEach(function (price) {
  total += price;
});
console.log(total);

// for of ------------------------------------------------

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
// for loop: for(let i = 0; i < prices.length; i ++)
for (let price of prices) {
  total += price;
}
console.log(total);
// DIFFERENCE BETWEEN FOR OF, FOR LOOP, FOR EACH:
// for of is a newer concept and for each has been around for a long time.
// Did not have for of back then. forEach came before for of


const colors = ['teal', 'cyan', 'peach', 'purple'];

// creating your own forEach function
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// testing the forEach function
forEach(colors, function (color, i) {
  console.log(color.toUpperCase(), `index of ${i}`);
});

// regular forEach function
colors.forEach(function (color, i) {
  console.log(color.toUpperCase(), `index of ${i}`);
});


*/
