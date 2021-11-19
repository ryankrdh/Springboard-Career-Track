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

// Creating elements
// Instead of using document.createElement("li") we can simply create an element using $("<li>")

// $("<li>") Create a new li
// $("li") Select existing `li`s
// Waiting for the DOM to load
// With vanilla JS we have DOMContentLoaded and window.onload, with jQuery we have:

// waits for the DOM to load
$(function () {});
// You may see this version:

// waits for the DOM to load
$(document).ready(function () {});

// ------------------------------------------------------------

// Events and Delegation with jQuery
// jQuery events
// jQuery’s on() works similarly to addEventListener. It lets you specify the type of event to listen for.

//prints when item with id "submit" is clicked
$('#submit').on('click', function () {
  console.log('Another click');
});
//alerts when ANY button is clicked
$('button').on('click', function () {
  console.log('button clicked!');
});
// Why Use on()?
// In most cases, click() and on(“click”) will both get the job done. HOWEVER, there is one key difference:

// .click(callback) is a shorthand for .on(“click”, callback)
// on() accepts optional argument between type of event and callback
// This flexibility allows us to leverage event delegation.
// Event Delegation
// Event delegation allows us to attach an event listener to a parent element, but only invoke the callback if the event target matches a certain selector.

// This will work even if elements matching the selector don’t exist yet!

$('#meme-container').on('click', '.meme', function (evt) {
  deleteMeme(evt.target);
});
// Less code
// More performant
// Event Delegation: Vanilla JS vs. jQuery
// Vanilla JS
// deletes a meme when it is clicked
// even if it doesn't exist on page load

document
  .getElementById('meme-container')
  .addEventListener('click', function (evt) {
    let target = evt.target;

    // checking for "meme" class on target
    // this logic would need to change a bit
    // if we were searching by something
    // else (eg tag name)

    if (target.classList.contains('meme')) {
      deleteMeme(target);
    }
  });

jQuery;
// deletes a meme when it is clicked
// even if it doesn't exist on page load

$('#meme-container').on('click', '.meme', function (evt) {
  deleteMeme(evt.target);
});

// ------------------------------------------------------------

// ------------------------------------------------------------

// PRACTICE

// to get a Nodelist from jQuery object
let $listItems = $('li');
$listItems.get();

// getting and editing css with jQuery
$('a').css('font-size'); // '18px'
$('a').css('font-size', '30px'); // the second argument makes the font size into 30px.

// saving jQuery in a variable.
const $h1 = $('h1');
$h1.addClass('highlight');

// editing CSS by chaining.
$('h1')
  .css('background-color', 'purple')
  .addClass('highlight')
  .text('CHAINING IS FUN!');

// traversing in jQuery
const $specialLI = $('li').eq(3);
$specialLI.next(); // next sibling
$specialLI.prev(); // previous sibling
$specialLI.parent(); // direct parent
$('ul').children(); // direct children not multi level children.
$('ul').find('a'); // this will recurse down and find children of childrens.

// Creating and appending elements
$('ul').append('<li class="highlight">I AM NEW!!!</li>'); // adding a new list
$('li').append('<input type="checkbox"/>'); // adding checkbox at the end
$('li').prepend('<input type="checkbox"/>'); // adding checkbox at the beginning
$('<h1>'); // creates h1 instead of searching for it.
$('<h1>HELLO!</h1>').css('color', 'orange'); // adding a new H1 with css.
$('<h1>HELLO!</h1>').css('color', 'orange').appendTo('p'); // appends to each paragraph.

$('li').after('<bold>HI</bold>'); // appends 'HI' to after evey li.
// .append() puts data inside an element at last index and *makes it a child*
// .prepend() puts the prepending elem at first index *makes it a parent*
// .after() puts the element after the element *sibling*
// .before() puts the element before the element *sibling*
$('h1').remove(); // to remove all h1

// Events and Delegation with jQuery.
$('img').click(function () {
  alert('HELLO!');
}); // each image gets an alert when clicked.

$('img').on('click', function () {
  $(this).css('border', '10px solid purple'); // $(this) is needed to use the keyword this in jQuery
});

// Event delegations
// use on() instead of regular click() because of event delegations.

$('#add-input').on('click', function () {
  $('form').append('<input type="text"');
});

$('input').on('focus', function () {
  $(this).val('BAMBOOZLED');
});

$('#meme-container').on('click', '.meme', function (evt) {
  deleteMeme(evt.target);
}); // listen for clicks in the element of class meme IN the #meme-container
