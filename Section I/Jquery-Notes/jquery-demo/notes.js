// jQuery
// What is jQuery?
// It’s a library for:

// Manipulating the DOM
// Adding Event Listeners
// Animating Elements
// Making HTTP Requests (AJAX)
// Why should you still learn jQuery?
// Brevity and clarity
// Cross-Browser Support
// AJAX
// 77% of the top 1,000,000 most visited pages use it

// download jquery: https://code.jquery.com/

// Selecting elements
// It’s as easy as using CSS selectors! (except you need to remember your CSS selectors)

$('ul');
// like document.querySelectorAll,
// this will select ALL uls

$('#todo-container');

$('.carousel-image');
// like document.querySelectorAll,
// this will select ALL the elements with that class
// What does this give you?
// A jQuery object

// jQuery objects are NOT the same as DOM elements
// To access an element, use the get function:

let $listItems = $('li');
$listItems; // a jQuery object

$listItems.get();
// an array of HTMLLIElements

$listItems.get(0);
// the first HTMLLIElement
// Storing jQuery Objects in variables
// It’s a common convention to store jQuery objects in variable names that begin with $.

// This isn’t necessary, but clearly communicates your intent.

let x = $('.class1');
let $class2Elements = $('.class2');

// 200 lines later...

console.log(x);
// wtf is this

console.log($class2Elements);
// nice, this is probably a jQuery object!
