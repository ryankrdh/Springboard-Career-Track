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
*/
