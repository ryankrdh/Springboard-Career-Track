'use strict';

// JavaScript Object Orientation

// JS Objects Review
// “Plain Old JavaScript Object” (POJO):

let o1 = {};

let o2 = new Object(); // same thing

o1.name = 'Whiskey';

o1['name'] = 'Whiskey'; // same thing. but gets evaluated

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

//iterates through key/value as individual arrays.
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
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

// -------------------------------------------------------
// Using a POJO
let triangle = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

triangle.getArea(); // 6
triangle.getHypotenuse(); // 5

// For now:

let triangle = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a + this.b) / 2;
  },
};
// this references to “this object”

// So, we can helpfully mix data & functionality!

// This is tidy: related functionality lives together
// Annoying when we want more than one triangle

// -----------------------------------------------
// Constructors
// Consider how we made an instance of our Triangle class:

let myTri = new Triangle(); // "instantiation" of triangle
myTri.a = 3;
myTri.b = 4;
demo / triangle - constructor.js;
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
// The method with the special name constructor is called when you make a new instance.

let myTri2 = new Triangle(3, 4);
myTri2.getArea(); // 6

// --------------------------------------------
// What Can You Do in the Constructor?
// Whatever you want!
// Common things:
// Validate data
// Assign properties
 
constructor(a, b) {
  if (!Number.isFinite(a) || a <= 0)
    throw new Error("Invalid a: " + a);

  if (!Number.isFinite(b) || b <= 0)
    throw new Error("Invalid b: " + b);

  this.a = a;
  this.b = b;
}
// (Note you don’t return anything from constructor function).