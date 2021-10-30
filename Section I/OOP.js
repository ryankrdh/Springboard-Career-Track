'use strict';

// JavaScript Object Orientation

// JS Objects Review
// “Plain Old JavaScript Object” (POJO):

let o1 = {};

let o2 = new Object(); // same thing

o1.name = 'Whiskey';

o1['name'] = 'Whiskey'; // same thing

// Can add functions as keys:

o1.sayHi = function () {
  return 'Hi!';
};

o1.sayHi(); // Hi!

// Can get arrays of keys, values, or [key, val] arrays:

Object.keys(o1); // ["name", "sayHi"]

Object.values(o1); // ["Whiskey", function () {...} ]

Object.entries(o1); // [["name", "Whiskey"],
//  ["sayHi", function () { ... } ]

// -------------------------------------------------
// Details You Should Know
// Properties that do not exist in the object register as undefined.

o1.elie; // undefined
// (This causes issues when you attempt to invoke () or . access them)

// All keys get “stringified”:

o1[1] = 'hello';
o1['1'] = 'goodbye';

// What is o1[1]?

o1[1]; // "goodbye"
// (This gets even more confusing when using things like nested arrays as keys)
//-------------------------------------------------------
// Mixing Data And Functionality
// Functions and Data
// Imagine some useful functions:

// demo/triangles.js
/* area of right triangle */

function getTriangleArea(a, b) {
  return (a * b) / 2;
}

/* hypotenuse of right triangle */

function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}
getTriangleArea(3, 4); // 6
getTriangleHypotenuse(3, 4); // 5
