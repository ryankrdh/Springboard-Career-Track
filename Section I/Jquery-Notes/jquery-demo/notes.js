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

// -------------------------------------------------------------------

// jQuery Methods
// Common jQuery Methods
// A great way to learn these is to compare them to vanilla JS methods!

// .val()
// .text()
// .attr()
// .html()
// .css()
// .addClass() / .removeClass() / .toggleClass()
// .empty() / .remove()
// .append() / .prepend()
// .find() / .closest() / .parent() / .next() / .prev()
// jQuery getter / setter pattern
// Vanilla JS: .getAttribute(attrName) and .setAttribute(attrName, newValue)
// jQuery: .attr(attrName, newValue) (second param is optional)
// This is common with jQuery methods
// Chaining with jQuery
// Almost all jQuery methods return a jQuery object, which allows for method chaining.

// Instead of performing DOM operations line-by-line, we can chain method calls together on a single jQuery object.

// Instead of:

let todoContainer = document.querySelector('#todo-container');
todoContainer.style.color = 'red';
todoContainer.innerText = 'look at this!';
todoContainer.addEventListener('click', function (evt) {
  console.log('clicked!');
});

// We can have:

$('#todo-container')
  .css('color', 'red')
  .text('look at this!')
  .on('click', function (evt) {
    console.log('clicked!');
  });

// ------------------------------------------------------------

// ------------------------------------------------------------

// ------------------------------------------------------------

// ------------------------------------------------------------

// PRACTICE

$('a').css('font-size'); // '18px'
$('a').css('font-size', '30px'); // the second argument makes the font size into 30px.

const $h1 = $('h1');
$h1.addClass('highlight');
