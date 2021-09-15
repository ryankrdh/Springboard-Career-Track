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

// adding onclick and ondblclick
function makeBody(color) {
  document.body.style.backgroundColor = color;
}

const btn = document.querySelector('#bg');
btn.onclick = function () {
  makeBody('red');
};


// add EventListener is different since we can decide what type of event to play.
// also beneficial if you want to add two events or delete the event.
const h1 = document.querySelector('h1');

h1.addEventListener('dblclick', function() {
    console.log('You just clicked the h1 element!');
    makeBody('violet');
})

// adding multiple listeners
const violetBtn = document.querySelector('#violet');

violetBtn.addEventListener('click', function () {
    makeBody('violet');
});

violetBtn.addEventListener('click', function() {
    h1.style.color = 'cyan';
});


// Two ways to load DOM. Have the script tag at the end OR use:
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('button');

    btn.addEventListener('click', function () {
        console.log('clicked');
    }); 
});
 

// Inside of the callback to addEventListener, we get access to a special object as a parameter - the event object.
const h1 = document.querySelector('h1');
h1.addEventListener('click', function(event) {
    console.log(event.type)
});

* target - what element is the target of the event.
pageX/pageY - Where on the page did this event occur?
key - what key was pressed that triggered this event?
preventDefault() - a function used to prevent the default behavior of the event.


// MouseMap Demo
document.addEventListener('mousemove', function (e) {
    //   console.log(e.pageX, e.pageY);
    const r = Math.round((e.pageX / window.innerWidth) * 255);
    console.log(r);
    const b = Math.round((e.pageY / window.innerHeight) * 255);
    console.log(b);
    const color = `rgb(${r}, 0, ${b})`;
    document.body.style.backgroundColor = color;
});


// User Submission

<form action="">
    Name: <input id="firstName" type="text">
    <button>Add your name!</button>
</form>

const formElement = document.querySelector("form");

formElement.addEventListener("submit", function(event) {
    console.log("you just submitted the form!")
})


// You will need event.preventDfault() to prevent the form action from sending a new request.

const form = document.querySelector('#monkeyform');
form.addEventListener('submit', function(evt) {
    evt.preventDefault(); // You need this in order to prevent an action
    aler    t('You submitted the form!!');  
})

// preventing other types of default behaviors. 
document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('No google for you!');
});


// LOGO maker demo
// using name attribute instead of id
const form = document.querySelector('#logoform');
const brandInput = document.querySelector('input[name="brandname"]');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //   console.log('submit!');
    const newLogo = makeLogo(
        brandInput.value,
        colorInput.value,
        fontSizeInput.value
        );
        results.appendChild(newLogo);
        //   brandInput.value = ''; // to reset text bar
    });
    
    function makeLogo(text, color, size) {
        const logo = document.createElement('h2');
        logo.innerText = text;
        logo.style.color = color;
        logo.style.fontSize = size + 'px';
        return logo;
    }
    
    
// key events

document.addEventListener('keypress', function (e) {
    console.log(e.key);
});

// this will fire any keys pressed. including shift, arrow keys
document.addEventListener('keydown', function (e) {
    console.log(e.key);
});

document.addEventListener('keyup', function (e) {
    console.log(e.key);
});

const playerKey = document.querySelector('input');
playerKey.addEventListener('keypress', function (e) {
  console.log(`KEY PRESS: `, e.key);
});


// multiple events + event delegation


// // **** USING EVENT LISTENERS TO CREATE ELEMENTS FOR ELEMENT REMOVE ****
// // NOT EFFICIENT
// const form = document.querySelector('#add-friend');
// const removeButtons = document.querySelectorAll('li button');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');

// // you need a for loop since the querySelector at top chooses one only
// for (let btn of removeButtons) {
//   btn.addEventListener('click', function (e) {
//     e.target.parentElement.remove();
//   });
// }

// // the new buttons won't work so there are two options: 1. Adding the event listener when we create elements. 2. event delegation.

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   //   console.log(input.value);
//   const newFriend = document.createElement('li');
//   const removeBtn = document.createElement('button');
//   removeBtn.innerText = 'UnFriend';
//   removeBtn.addEventListener('click', function (e) {
//     e.target.parentElement.remove();
//   });
//   newFriend.innerText = input.value;
//   newFriend.appendChild(removeBtn);
//   friendList.appendChild(newFriend);
//   input.value = '';
// });


// // **** USING DELEGATIONS TO CREATE REMOVE BUTTON ****
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');

friendList.addEventListener('click', function (e) {
  //   console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
    e.target.classList.add('best-friend');
    const heart = document.createElement('span');
    heart.innerHTML = '&hearts;';
    e.target.prepend(heart);
  }
});
// the new buttons won't work so there are two options: 1. Adding the event listener when we create elements. 2. event delegation.
df;
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //   console.log(input.value);
  const newFriend = document.createElement('li');
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'UnFriend';
  newFriend.innerText = input.value;
  newFriend.appendChild(removeBtn);
  friendList.appendChild(newFriend);
  input.value = '';
});


// data attribute

const ul = document.querySelector('#cars');
ul.addEventListener('click', function(e) {
    console.log(e.target.dataset.year);
    e.target.dataset.sold = 'true';
});


//  color palette

// Using datasets.
const colorsSection = document.querySelector('#colors');

colorsSection.addEventListener('click', function (e) {
  document.body.style.backgroundColor = e.target.dataset.hex;
});


// Local Storage

Local storage: Persists in the browser as long as you want it to. I can quit the browser, restart the computer and it will still be in the local storage.
Session storage: Only lasts for the duration of your session.
