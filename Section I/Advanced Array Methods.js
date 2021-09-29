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
// forEach is mildly useful at best.


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

/*
JS ARRAY METHODS - MAP

// Map is very useful.
// pass in a callback and it calls that function once in the array. ForEach calls the function and doesn't do much with it. 

// When map calls the function: 
// creates a new array
// iterates through an array
// runs a callback function for each value in the array. 
// adds the result of that callback function to the new array
// returns the new array.
// map always returns a enw array of the same length.
 
let numbers = [1, 2, 3];

numbers.map(function(value, index, array) {
    return value * 10;
});


const numbers = [21, 37, 64, 99, 142];

const negatives = numbers.map(function (num) {
  return num * -1;
});

// ** Use forEach if you just wanted to console.log the results. map will return an aray of undefined.
const doubles = numbers.map(function (num) {
  console.log(num * 2);
});



const todos = [
  {
    id: 1,
    text: 'walk the dog',
    priority: 'high',
  },
  {
    id: 2,
    text: 'walk the chickens',
    priority: 'medium',
  },
  {
    id: 3,
    text: 'feed the cats',
    priority: 'low',
  },
  {
    id: 4,
    text: 'Put out the fire in my garage ',
    priority: 'very high',
  },
];

// isolating the texts from todos.
const todoText = todos.map(function (todo) {
  return todo.text;
});

// links is currently a nodeList not an array. But we can make it into an array.
// const links = document.querySelectorAll('a');
// Array.from(links);

const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function (a) {
  return a.href;
});


*/
