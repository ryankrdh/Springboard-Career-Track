'use strict';

/*
// ECMA: Standards organization for information and communication systems.

Let can be reassigned but not redeclared (unlike var)
The let keyword creates a block-scoped variable: a variable that only exists inside a code block.

let and const are scoped to the code block, not just the function like var.

The const keyword prevents a variable from ever being reassigned or redeclared.

with const you can mutate the content as long as you don't reassign the variable. Objects and arrays can be mutated.

*/

/*
// HOISTING

var gets hoisted. let/const does not get hoisted to the top. 

Unlike let, you need to assign a variable to const when declaring a variable.

Try and use const and if it doesn't work use let.

*/

/*
//ARROW FUNCTION

Arrow Functions do not have their own this context. If your function uses the keyword this, be wary!

You should not be using arrow functions:

In an object method
When you need your own keyword this.

Arrow Functions Summary
Can only be used as shorthand for anonymous function expressions
Must put parentheses around parameters if there are 0 or 2+ parameters
Return statement is implied if you leave out curly braces
They do not make their own this


// arrow function won't replace function declarations.

array.map(function(x) {
    return x * 2
})

 // function declaration 
 function greet () {

 }

 // function expression
 const add = function (x, y) {
    return x + y;
 };

// ARROW FUNCTION
const add = (x,y) => {
    return x + y;
};

//SHORTENING CALLBACKS
[1, 2, 3].forEach(function (n, idx) {
    console.log(n, idx);
});

[1, 2, 3].forEach((n, idx) => {
    console.log(n, idx);
});

//SHORTENING EXERCISE 1
const x = [2, 3, 6, 78, 99, 104, 23].reduce(function (max, currNum) {
  return Math.max(max, currNum);
});

const y = [2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
  return Math.max(max, currNum);
});

// Simple version if there is only one parameter
const double = (n) => n*2;

[1, 5, 7, 9, 10, 12, 13, 15 ].map((n) => (n % 2 === 0 ? 'even' : 'odd'));

//SHORTENING EXERCISE 2

const dailyRainTotals = [
    [ 1.2, 0.35, 2.2 ],
    [1.7, 0.6, 0.1],
    [2.5, 0.9, 1.5]
];


// WITH RETURNS
dailyRainTotals.map((hourlyRainTotals) => {
  return hourlyRainTotals.reduce((sum, inchesOfRain) => {
    return sum + inchesOfRain;
  });
});

// WITH IMPLICIT RETURNS
dailyRainTotals.map((hourlyRainTotals) =>
  hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
);

*/

/*
// REST AND SPREAD OPERATOR

// ...something: rest when defining a function
function sum(...nums) {
    return nums.reduce((sum, n) => sum + n);
}
// AS ARROW FUNCTION
const sumAll = (...values) => {
    if (!values.length) return undefined;
    return values.reduce((sum, n) => sum + n);
}

// EXAMPLE
function makeFamily(parent1, parent2, ...kids) {
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 0,
    };
}

// type example: boolean, number, string.
const filterByType = (type, ...vals) => {
    return vals.filter((v) => typeof v === type);
};

*/

/*
// SPREAD OPERATOR
max(...something) 
[...something]
{...asd}

// ways to make a copy of an array using spread
const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];
const paletteCopy = ['sky blue', ...palette, 'grass green']

// wasy to make a copy using concat
palette.concat('deep purple')

// OBJECTS ARE NOT ITERABLE IN JAVASCRIPT

const tea = {
  type: 'oolong',
  name: 'winter sprout',
  origin: 'taiwan',
};

const teaTin = { ...tea, price: 22.99 };

// change the value of name
const newTea = { ...tea, name: 'golden frost' };

// when you use spread, it wont perform deep clone. It keeps the original references for any nested objects or arrays.
*/

// OBJECT ESTRUCTURING

// JavaScript programmers take things out of objects all the time.

// Here’s how you used to have to extract values into variables.

let userData = {
  username: 'smith',
  id: 12345,
  password: 'fiddlesticks',
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined,
};

let username = userData.username;
let firstName = userData.firstName;
let lastName = userData.lastName;
let id = userData.id;

// That’s A Lot of Typing
// So they came up with some syntactic sugar.

let userData = {
  username: 'smith',
  id: 12345,
  password: 'fiddlesticks',
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined,
};

/*
  declare variables: username, firstName, lastName, id
   values taken from the keys of the same name in userData
 */

let { username, firstName, lastName, id } = userData;

console.log(username); // smith
console.log(id); // 12345

// --------------------------------

Destructuring + Spread;
const userData = {
  username: 'smith',
  id: 12345,
  password: 'fiddlesticks',
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined,
};

// extract the password key; collect the rest in 'user'
const { password, ...user } = userData;

console.log(user);
/*
{
  username: 'smith',
  id: 12345,
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined
}
*/

// -----------------------------------

// Renaming with destructuring
const instructorData = {
  name: 'Colt',
  job: 'Instructor',
};

const { name: instructorName, job: occupation } = instructorData;

instructorName; // "Colt"
occupation; // "Instructor"

// -----------------------------------

// Defaults with destructuring
const options = {
  refreshTime: 200,
};
const { refreshTime = 750, waitTime = 1000 } = options;
console.log(refreshTime); // 200 - initialized in options
console.log(waitTime); // 1000 - fallback to default

// ** RENAME AND DEFAULT
const { refreshTime: timePassed = 750, waitTime: pauseTime = 1000 } = options;

// -----------------------------------

// Destructuring nested objects

const instructor = {
  id: 44,
  name: 'Colt',
  isHilarious: true,
  funFacts: {
    favoriteFood: 'Burrito',
    favoriteDrink: 'Old Fashioned',
  },
};
const {
  funFacts: { favoriteFood, favoriteDrink },
} = instructor;
console.log(favoriteFood); // 'Burrito'

// ----------------------------------

// Destructuring functions
// We can use destructuring to extract key/value pairs from an object into variables.

function makeInstructor(settings) {
  let name = settings.name;
  let age = settings.age;
}
// We’re going to assume the function is passed an object with a key of name and age

function myFunc({ name, age }) {
  let name = name;
  let age = age;
}
// But what happens if the object does not contain a key of name or age?

// We can use default parameters!

function myFunc({ name = 'Xie', age = 38 }) {
  let name = name;
  let age = age;
}

// -----------------------------------------------------------------

// You Can Apply The Same Concept To Arrays!
const myFavoriteThings = ['teaching', 'music', 'hiking', 'dank memes'];

const [first, second, ...others] = myFavoriteThings;

console.log(first); // 'teaching'
console.log(second); // 'music'
console.log(others); // ['hiking', 'dank memes']

// -----------------------------------------------------------------

// Fancy 1-Line Array Value Swap
let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 1

// -----------------------------------------------------------------

// -----------------------------------------------------------------

// -----------------------------------------------------------------

// -----------------------------------------------------------------

/*
//OBJECT ENHANCEMENTS
Current usage
These new shorthand methods are everywhere!
Object shorthand and methods allow for writing less code
Computed property names are everywhere in modern web frameworks.

Computed property names in the wild
This appears when you work with multiple inputs or DOM elements and you want to change the value in an object based on a specific interaction,
It’s impossible to know upfront what key you are changing in the object without hardcoding the key, so instead we can use the event object for a browser interaction.

function changeValueInObj(obj, event){
  return {
    ...obj,
    [event.target.name]: [event.target.value]
  }
}
*/

// QUESTIONS:
/*
Section 10.4 REST/SPREAD: 
Return a new object with all the keys and values
from obj and a new key/value pair  
VS.
Return a new object with a modified key and value. 


*/
