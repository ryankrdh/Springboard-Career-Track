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
  printThis : function() { // **** You can write this without function but 'this' will react differently.
      console.log(this);
  },
  getArea: function () {
      this.printThis();
    return (this.a + this.b) / 2;
  },
};
// this references to “this object”

// So, we can helpfully mix data & functionality!

// This is tidy: related functionality lives together
// Annoying when we want more than one triangle

// -----------------------------------------------
// Constructors
// first letter is uppercased for constructor functions.
// Consider how we made an instance of our Triangle class:
// The new keyword creates a new blank, plain js object.

let myTri = new Triangle(); // "instantiation" of triangle
myTri.a = 3;
myTri.b = 4;

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

// refactor:

constructor(a, b, c) {
  for (let side of [ a, b, c ] ) {
    if (!Number.isFinite(side) || side <= 0) {
      throw new Error('Sides must be positive numbers!');
    }
  }
  this.a = a;
  this.b = b;
  this.c = c;
}
 
// Methods
 
const add = (x, y) => x + y;
const mult = (x, y) => x * y;
const square = (x) => x * x;
const power = (x, y) => x ** y;

const myMath = { add, mult, square, power };

// Other ways to add functions as properties:

const myMath = {
    add(x,y) {
        return x + y;
    },
    square(x) {
        return x * x;
    }
};



// -------------------------------------------------------------

getArea() {
  return (this.a * this.b) / 2;
}
// Functions placed in a class are “methods” (formally: “instance methods”).

// They have access to properties of object with this.

// They can take arguments/return data like any other function.

// A method can call another method:

class Triangle {
   getArea() {
     return (this.a * this.b) / 2;
   }

   /* Is this a big triangle? */

   isBig() {
     return this.getArea() > 50; 
   }
 }
// Note: to call a method, you need to call it on this

// Without this, calling getArea throws a ReferenceError - it is not in scope!

// Inheritance & Super

class Triangle {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    getArea() {
      return (this.a * this.b) / 2;
    }
  
    getHypotenuse() {
      return Math.sqrt(
          this.a ** 2 + this.b ** 2);
    }
  
    describe() {
      return `Area is ${this.getArea()}.`;
    }
  }

  class Triangle {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    getArea() {
      return (this.a * this.b) / 2;
    }
  
    getHypotenuse() {
      return Math.sqrt(
          this.a ** 2 + this.b ** 2);
    }
  
    describe() {
      return `Area is ${this.getArea()}.`;
    }
  }

// -----------------------------------------------------

// PROTOTYPES

function Triangle(a,b) {
  this.a = a
  this.b = b;
}
Triangle.prototype.getArea = function() {
  return this.a * this.b / 2;
};
Triangle.prototype.getHypotenuse = function() {
  return Math.sqrt(this.a ** 2 + this.b ** 2);
};

const tri1 = new Triangle(3, 4);
tri1.getHypotenuse(); // 5
const tri2 = new Triangle(9, 12);
tri2.getHypotenuse(); // 15

// classes allow us to have the same functionality without talking about the prototypes. Without prototypes/class, it would just create a  new function every time it is called.
 
class Triangle{
  greet() {
    console.log('Hello from triangle!!');
  }
  display() {
    console.log(`Triangle with sides of ${this.a} and ${this.b}`);
  }
}

const firstTri = new Triangle();
firstTri.a = 3;
firstTri.b = 4;
const secondTri = new Triangle();
secondTri.a = 9;
secondTri.b = 12;

// -----------------------------------------------------

// What can you do in the constructor?
// common things: validate data, assign properties

constructor(a,b) {
  if (!Number.isFinite(a) || a <= 0)
    throw new Error("Invalid a: " + a); 

  if (!Number.isFinite(b) || b <= 0)
    throw new Error("Invalid b: " + b);

  this.a = a;
  this.b = b;
}

// ------------------------------------------------------

// You don't want to return with constructor. Instead throw new Error for validations.
class ColorTriangle {
  constructor(a, b, color) {
    this.a = a;
    this.b = a;
    this.color = color;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(
        this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `Area is ${this.getArea()}.` +
        ` Color is ${this.color}!`;
  }
}

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    // call parent constructor with (a, b)
    super(a, b);
    this.color = color;
  }

  // will "inherit" getArea, getHypotenuse

  // "override" describe() w/new version  

  describe() {
    return super.describe() +
        ` Color is ${this.color}!`;
  }
}

// ----------------------------------------------------

//   Multi-Level Inheritance
class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    // call parent constructor with (a, b)
    super(a, b);
    this.color = color;
  }

  // will "inherit" getArea, getHypotenuse

  // "override" describe() w/new version  

  describe() {
    return super.describe() +
        ` Color is ${this.color}!`;
  }
}
 

class InvisTriangle extends ColorTriangle {
  constructor(a, b) {
    // call parent constructor  
    super(a, b, "invisible");
  }

  // still inherit getArea, getHypotenuse

  describe() {
    return "You can't see me!";
  }
}

//--------------------------------------------------- 
// PRACTICE

class Triangle {
  constructor(a, b, c) {
    for (let side of [ a, b, c]) {
      if (!Number.isFinite(side) || side <= m0) {
        throw new Error('Sides must be positive numbers!');
      }
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  greet() {
    console.log('Hello from a triangle!!');
  }
  display() {
    console.log(`Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`
    );
  }
  getArea() {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * [s - a] * [s - b] * [s - c]);
  }
  isBig() {
    return this.getArea() > 50;
  }
}

const t1 = new Triangle(3, 4, 5);
const t2 = new Triangle(5, 6, 10);

// ----------------------------------------------------

// THIS

// JavaScript “Functions”
// In a sense, JavaScript doesn’t have functions.

// Everything is called on something, like a method.

function whatIsThis() {
  console.log("this =", this);
}
let o = { myFunc: whatIsThis };

o.myFunc();    // get "this = o"
whatIsThis();      // wtf?!

// -----------------------------------------------------

// Global Object
// When you call a function on nothing …

// … you call it on the “global object”

// In browser JS, that’s window (the browser window)
// in NodeJS, that’s global (where some Node utilities are)
// You’ve relied on that, even if you didn’t realize it!

alert("Hi!");

window.alert("Hi!");   // -- same thing!
Therefore, a “function” called at the top level is same as:

window.whatIsThis()

// ---------------------------------------------------------
// Undefined Fluffy
class Cat {
  constructor(name) {
    this.name = name;
  }

  dance(style) {
    return `Meow, I am ${this.name}` +
        ` and I like to ${style}`;
  }
}
 
// so… what’s happening here?
let fluffy = new Cat("Fluffy");

fluffy.name;             // "Fluffy"

fluffy.dance("tango")    // works!

let fDance = fluffy.dance;

fDance("salsa");         // error?!
fluffy.dance("tango");
// Find the dance method on fluffy
// Call the dance method on fluffy — yay!
let fDance = fluffy.dance;
fDance("tango");
// Find the dance method on fluffy
// Call the dance method on the global window — ut oh

// ----------------------------------------------------

// Call
// Sometimes, you’ll need to say “call this function on this object”

// That’s what call() is for!

let fDance = fluffy.dance;

// call on fluffy, passing "tango" as arg
fDance.call(fluffy, "tango");
whatIsThis.call(fluffy);       // this = fluffy
apply()

// There is a related function, apply(): for this, you can pass the list of arguments to the function as an array, rather than passing one-by-one.

// This used to be a very important technique, since it was the only reasonable way to call a function that expected several individual arguments where you already had those arguments in a list:

Math.max(1, 2, 3);       // Math.max expects indiv arguments

let myNums = [1, 2, 3];  // If you already have an array ...

Math.max.apply(null, myNums);  // pass that array as indiv arguments
                               // (don't care what "this" is, so pass `null`)
// Nowadays, however, this is much more easily done with the spread operator:

Math.max(...myNums);

// ** call is a way to manipulate 'this'. doesn't mutate it. just change how it is executed once.

// ------------------------------------------------------

// Bind
// You can “perma-bind” a function to a context:

fDance("tango");       // error -- this isn't the cat

fDance.call(fluffy, "tango");   // ok but tedious to always do

let betterDance = fDance.bind(fluffy);

betterDance("tango");  // ok -- bound so that `this` is Fluffy
// bind is a method on functions that returns a bound copy of the function.

// PRACTICE ---------------------------------------------
const bDance = blue.dance;
const boundDance = bDance.bind(blue);

const rocketDance = blue.dance.bind(rocket); 
// rocketDance('tango')  

// even calling another object won't work since the method is bound.
const dog = {
  name :  'Tyson',
  breed : 'Mini Aussie',
  dance : rocketDance
};

dog.dance() // this will result in running rocket, not Tyson.

// -----------------------------------------------------------

// Binding Arguments
// You can also bind arguments to functions. That will bake them into the function.

function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

// "null" for "this" means it doesn't matter what "this" is
const applyCASalesTax = applySalesTax.bind(null, 0.0725); // null wont be bound
applyCASalesTax(50);  // 53.63

// ----------------------------------------------------------

// Pre-Binding Calls
// Imagine we want three buttons which call popUp, but with different args:

<button id="a">A</button>
<button id="b">B</button>
<button id="c">C</button>
 
 
function popUp(msg) {
  alert("Secret message is " + msg);
}

function handleClick(evt) {
  let id = evt.target.id;

  if (id === "a") popUp("Apple");
  else if (id === "b") popUp("Berry");
  else if (id === "c") popUp("Cherry");
}

const get = document.getElementById.bind(document);

get('a').addEventListener("click", handleClick);
get('b').addEventListener("click", handleClick);
get('c').addEventListener("click", handleClick);
demo/buttons.html
function popUp(msg) {
  alert("Secret message is " + msg);
}

const get = document.getElementById.bind(document);

get('a').addEventListener("click", popUp.bind(null, "Apple"));
get('b').addEventListener("click", popUp.bind(null, "Berry"));
get('c').addEventListener("click", popUp.bind(null, "Cherry"));

// *** When passing object methods into events, you will need to bind.

// -----------------------------------------------------------

// Arrow Functions
// Arrow functions don’t make their own this
// arrow functions's 'this' is window. that's why you use factory function for objects.
// arrow functions are useful for callbacks

class Cat {
  constructor(name) {
    this.name = name;
  }

  superGreet() {
    alert(`#1: I am ${this.name}`);   // works, obvs

    setTimeout(function () {
      alert(`#2 I am ${this.name}`);  // ut oh
    }, 500);

    setTimeout(() => {
      alert(`#3 I am ${this.name}`);  // yay!
    }, 1000);
  }
}

let kitty = new Cat("Kitty");
kitty.superGreet();

// PRACTICE ---------------------------------------------------

const greeter = {
  msg : 'I like chickenz',
  sayHi : () => {
    alert(this.msg); // 'this' points to window. arrow functions wont work inside objects
  },
  waitAndGreet : function(delay) {
    setTimeout(
      function() {
        alert(this.msg);
      }.bind(this),
      delay
    );
  }
};

// BETTER WAY with ARROW FUNCTION

const greeter = {
  msg : 'I like chickenz',
  sayHi : () => {
    alert(this.msg); // 'this' points to window. arrow functions wont work inside objects
  },
  waitAndGreet : function(delay) {
    setTimeout(
      () => {
        alert(this.msg);
      },
      delay
    );
  }
};

// QUESTIONS --------------------------------------------------

// prototypes, classes, constructors. class methods


