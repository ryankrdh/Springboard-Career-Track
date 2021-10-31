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
// More examples of destructuring nested objects

const {
  Rated: { rating, advisory: note },
} = movie;
const {
  Ratings: [{ Value: imdbRating }, { Value: rtRating }, { Value: metaRating }],
} = movie;

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
const myFavoriteThings = [
  'teaching',
  'music',
  'hiking',
  'riding',
  'dank memes',
];

const [first, second, , ...others] = myFavoriteThings; // empty comma will skip an element

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

// More examples:
const longJumpResults = ['Tammy', 'Jessica', 'Violet'];

function awardMedals([gold, silver, bronze]) {
  return {
    gold,
    silver,
    bronze,
  };
}

console.log(awardMedals(longJumpResults)); // gold: "Tammy" silver: "Jessica" bronze: "Violet"

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// OBJECT ENHANCEMENTS
// Object Shorthand
// ES2015 provides quite a few enhancements for JS objects!

// When the keys are the same name as the variable values, (this happens a lot), you don’t have to repeat yourself.

let firstName = 'Mary';
let lastName = 'Malarky';

// ES5 (Oldschool)
let instructor = {
  firstName: firstName,
  lastName: lastName,
};

let firstName = 'Mary';
let lastName = 'Malarky';

// ES6
let instructor = {
  firstName,
  lastName,
};

// Another Example

//ES5 (oldschool)
function makePerson(first, last, age) {
    return {
        first : first,
        last : last,
        age : age,
        isAplive : true
    };
}

// ES6
function makePerson(first, last, age) {
    return {
        first, last, age, isAlive: true 
    }
}

// -----------------------------------------------------------------

// Object Methods
// A nice shorthand when a key in an object represents a function.

// ES5
let instructor = {
  sayHello: function () {
    return 'Hello!';
  },
};

// ES2015 - do NOT use arrow functions here!
let instructor = {
  sayHello() {
    return 'Hello!';
  },
};

// another example(old school)
const mathStuff = {
    x: 200,
    add: function(a,b) {
        return a + b;
    },
    square: function(a) {
        return a * a;
    }
}

// ES2015
const mathStuff = {
    x: 200, 
    add(a,b) {
        return a + b;
    },
    square(a) {
        return a* a;
    }
};

// -----------------------------------------------------------------

// Computed Property Names
// ES2015 allows us to create an object with a key that JavaScript can compute at definition.

// Here’s what we mean by that!

// ES5
let firstName = 'Mary';
let instructor = {};
instructor[firstName] = "That's me!";

instructor.Mary; // "That's me!"

// ES2015
let firstName = 'Mary';
let instructor {
    [firstName]: "That's me!"
}

instructor.Mary; // "That's me!"

// another example(old school)
function makeColor(name, hex) {
    const color = {};
    color[name] = hex;
    color[hex] = name;
    return color;
}

// ES2015 
function makeColor(name, hex) {
    return  {
        name : hex, 
        hex : name
    }
}

// -----------------------------------------------------------------

// Current usage
// These new shorthand methods are everywhere!
// Object shorthand and methods allow for writing less code
// Computed property names are everywhere in modern web frameworks.

// Computed property names in the wild
// This appears when you work with multiple inputs or DOM elements and you want to change the value in an object based on a specific interaction,
// It’s impossible to know upfront what key you are changing in the object without hardcoding the key, so instead we can use the event object for a browser interaction.

function changeValueInObj(obj, event){
    return {
      ...obj,
      [event.target.name]: [event.target.value]
    }
  }

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Maps
// Also called “hash maps” in other languages
// Until ES2015 - objects were replacements for maps
// Similar to objects, except the keys can be ANY data type!
// Created using the new keyword
// You can use any data types as a key for maps

// What it looks like
let firstMap = new Map();

firstMap.set(1, 'Ash');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice'); // true
firstMap.size; // 2

// Keys can be any type!

let arrayKey = [];
firstMap.set(arrayKey, [1,2,3,4,5]);

let objectKey = {};
firstMap.set(objectKey, {a:1});

firstMap.get(1); // 'Ash'
firstMap.get(false); // 'a boolean'
firstMap.get(arrayKey); // [1,2,3,4,5]
firstMap.get(objectKey); // {a:1}

// We can easily iterate over the map!

firstMap.forEach(v => console.log(v));

// Ash
// a boolean
// [1,2,3,4,5]
// {a:1}

// maps can also have functions as keys

const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(mult, 0);

funcCalls.set(add, 1);
funcCalls.set(mult, 9);

// Maps also provide:

// .keys() to iterate over all the keys
// .values() to iterate over all the values
// .entries() to iterate over all the [key,value] pairs
// a Symbol.iterator which means we can use a for…of loop to iterate over the keys, values or both!
// Here’s what it looks like to access everything in a map with .entries() and destructuring!

let m = new Map ([
    [1, "Ayisha"],
    [2, "Shani"],
    [3, "Michelle"],
])

m.set(4, "Wolfie")

for(let [key, value] of m.entries()){
    console.log(key, value);
}

  // 1 "Ayisha"
  // 2 "Shani"
  // 3 "Michelle"

// Another example. Turning an array into a map
const bandData = [[3, '3 Doors Down'], ['three', 'Three Dog Night'], ['nine', 'Nine Inch Nails']];
const bandMap = new Map(bandData);

// Turning the map back into an array.
[...bandMap]

// Chaining set calls together
bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox Twenty')

// Spreading keys into iterable arrays.
[...bandMap.keys()]

// -----------------------------------------------------------------
// Why use maps?
// Finding the size is easy - no more loops or Object.keys()
// The keys can be any data type!
// You can accidentally overwrite keys on the Object.prototype in an object you make - maps do not have that issue
// Iterating over keys and values in a map is quite easy as well
// If you need to look up keys dynamically (they are not hard coded strings)
// If you need keys that are not strings!
// If you are frequently adding and removing key/value pairs
// Are key-value pairs frequently added or removed?
// If you are operating on multiple keys at a time

// -----------------------------------------------------------------
// Sets
// All values in a set are unique
// Any type of value can exist in a set
// Created using the new keyword
// Exist in quite a few other languages, ES2015 finally brings them to JavaScript
// Creating Sets
// To make a new Set, we call new Set()
// When making a new Set, you can also pass in an iterable object.

const hashTags = new Set(["#selfie", "#nofilter"])
// -----------------------------------------------------------------
// Adding to Sets
// There is only a single method to add items to a set: add()

const annoyingHashTags = new Set();
annoyingHashTags.add("#YOLO");
annoyingHashTags.add("#Blessed");
annoyingHashTags.add("#YOLO"); // will not be added!

// -----------------------------------------------------------------
// size
// Use the size property to determine the number of values stored in a Set:

const annoyingHashTags = new Set();
annoyingHashTags.add("#YOLO");
annoyingHashTags.add("#Blessed")

annoyingHashTags.size //2

// -----------------------------------------------------------------
// Checking for an element in a set
// Sets do not support random access,
// but we are able to check if a set contains a given value using has()

const annoyingHashTags = new Set();
annoyingHashTags.add('#YOLO');
annoyingHashTags.add('#Blessed');

annoyingHashTags.has('#YOLO'); //true
annoyingHashTags.has('#Selfie'); //false

// -----------------------------------------------------------------
// Removing values in a set
// To remove a single value from a set, use delete()

const annoyingHashTags = new Set();
annoyingHashTags.add("#YOLO");
annoyingHashTags.add("#Blessed");

annoyingHashTags.has("#YOLO"); //true
annoyingHashTags.delete("#YOLO");
annoyingHashTags.has("#YOLO"); //false

// We can also use clear() to empty a set of all values:
annoyingHashTags.clear();

// -----------------------------------------------------------------
// Iterating over a set
// Sets are iterable objects, so we can use them with for…of loops or the spread operator.
// Values in a set are ordered by insertion order. Here’s one example of looping over a Set:

const annoyingHashTags = new Set();
annoyingHashTags.add('#Selfie');
annoyingHashTags.add('#Blessed');
annoyingHashTags.add('#noFilter');

for(let val of annoyingHashTags) {
    console.log("Please don't use", val);
}
// -----------------------------------------------------------------
// Map objects are collections of key/value pairs where both the keys and values may be arbitrary ECMAScript language values. A distinct key value may only occur in one key/value pair within the Map’s collection. Distinct key values as discriminated using the a comparision algorithm that is selected when the Map is created.
// -----------------------------------------------------------------
// When would you use sets?
// Removing duplicate values
// Uniqueness required
// Efficiently checking if an item is in a collection (much better than arrays)

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------


// QUESTIONS:
/*

Section 10.4 REST/SPREAD: 
Return a new object with all the keys and values
from obj and a new key/value pair  
VS.
Return a new object with a modified key and value. 

// -------------------------------------------------------------------

*/


