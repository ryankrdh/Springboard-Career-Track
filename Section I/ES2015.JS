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

// ...something: rest
function sum(...nums) {
    return nums.reduce((sum, n) => sum + n);
}
// AS ARROW FUNCTION
const sumAll = (...values) => {
    if (!values.length) return undefined;
    return values.reduce((sum, n) => sum + n);
}
*/
