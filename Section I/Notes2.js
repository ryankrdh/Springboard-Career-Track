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





*/

// picking a random color.

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(%{r},${g},${b})`;
}

// const h1 = document.querySelector('h1');
// h1.style.color = randomRGB();

setInterval(function () {
  h1.style.color = randomRGB();
}, 500);
