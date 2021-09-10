'use strict';

/*
Selecting Elements in the DOM
The DOM allows us to use javascript to manipulate HTML.
We can use methods like querySelector to access elements on the page. 
Using the DOM we can modify elements and attributes.

DIFFERENCE BETWEEN getElementById VS. querySelector

In query selector, you can use any valid CSS selector to select elements. With element by ID, you can only select element with ID name and it will be looking only for elements with particular ID, this method is quite fast.



getElementById:
document.getElementById("main");
Finds the FIRST matching id.

getElementsByTagName:
document.getElementsByTagName("li");
It returns a list of all of the elements that match the string passed to the function.
It looks like an array but you cannot use common methods like push, pop, indexOf or includes.

getElementsByClassName:
document.getElementsByClassName("heading");
accepts a string which is the name of an element in the DOM.
It returns a list of all the elements that have a class attribute, which matches the string passed to the function


QUERY SELECTOR can replace getElement methods most of the time
querySelector:
document.querySelector("#main");
accepts a string which is a valid CSS selector.
It returns the first element that matches the CSS selector passed to the function.

querySelectorAll:
document.querySelectorAll("li");
accepts a string which is a valid CSS selector.
It returns all the elements that matches the CSS selector passed to the function.



.innerText vs .textContent 
innerText is aware of the rendered appearance of text, while textContent is not.
textContent will give ALL the text including <script> and <script>. 
it even shows: style ="ignores display:none;""

innerText is usually the one you want.

innerHTML is like textContent for a specific tag 
document.querySelector('p').innerHTML

To prevent cross site scripting attack: 
if you were using innerHTML, other users could run code or insert scripts into our website


In javascript, css properties are camel cased.

const allH3s = document.querySelectorAll('h3');
for (let h3 of allH3s) {
    h3.style.color = 'purple'
}


// picking a random color.

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// const h1 = document.querySelector('h1');
// h1.style.color = randomRGB();

// setInterval(function () {
//   h1.style.color = randomRGB();
// }, 500);

const letters = document.querySelectorAll('.letter');

const intervalID = setInterval(function () {
  for (let letter of letters) {
    letter.style.color = randomRGB();
  }
}, 1000);

// clearInterval(intervalID)


getAttribute 

const imgs = document.querySelectorAll('img');

for(let img of imgs) {
    console.log(img.getAttribute('src'))
} 

// This sets all images to the first img.
const src = imgs[0].getAttribute('src');
for (let img of imgs) {
    img.setAttribute('src', src);
}
getAttribute takes in two elements, att. you want to change. and second is the value you want to give it.

const firstInput = document.querySelector("input")
firstInput.setAttribute("type", "email")

direct attribute access:
const input = document.querySelector('form input')

//saving the input data into a variable and clearing it.
const userInput = input.value;
input.value = '';

const range = document.querySelector('input[type="range"]') //selecting by attribute

// manipulating the value.
range.value = 5

Manipulating classes:
* setAttribute('class') - this will override the class
* className - This will give you a string representation of the class.
* classList(useful) - This will give you an array-like object to add, remove, or toggle classes.

classList methods: add, remove, toggle, contains


function toggleAllTodos() {
    const todos = document.querySelectorAll('li');

    for (let li of todos) {
        li.classList.toggle('completed');  
    }
}


const h1 = document.querySelector('h1');

setInterval(function () {
    if(h1.classList.contains('big')) {
        h1.innerText = "SAD";
    } else {
        h1.innerText = "HAPPY"
    }
    h1.classList.toggle('big');
    h1.classList.toggle('small');
}, 1000)


const newTodo = document.createElement('li');
const boldText = document.createElement('b');
const ul = document.querySelector('ul');
boldText.textContent = "DON'T FORGET TO LOCK THE COOP!"
newTodo.classList = 'Todo'
newTodo.append(boldText);
ul.append(newTodo);

const secondTodo = document.createElement('li');
secondTodo.textContent = "Order more la croix";

ul.append(newTodo, secondTodo) 


appendChild will add one at a time to the end.
append will add multiple at the end.
prepend will add multiple at the beginning.

removeChild vs remove is the same.

const ul = document.querySelector('ul');
ul.remove();

parentElement:
const div = document.querySelector('div');
const section = div.parentElement

children, firstElementChild, lastElementChild
const ul = document.querySelector('ul');
const li = ul.children


Nodes vs. Elements.
with some of these finder methods, you will see that you don't always get back on html element, you sometimes get back what is called a text node.
Everything in the DOM is a node, some nodes are not actually HTML elements, but text or even comments!

Every element is a node. but not all nodes are elements.

enters are considered text node. 

The DOM allows us to use JS to find and modify elements and their attributes.
We can modify text, styles, and much more using the DOM
To easily modify multiple elements, we can iterate over a list of elements and change each one.

*/

// ***** JAVACRIPT EVENTS *****

/*

//adding onclick and ondblclick
function makeBody(color) {
  document.body.style.backgroundColor = color;
}

const btn = document.querySelector('#bg');
btn.onclick = function () {
  makeBody('red');
};



*/
