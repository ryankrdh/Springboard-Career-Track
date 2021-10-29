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
