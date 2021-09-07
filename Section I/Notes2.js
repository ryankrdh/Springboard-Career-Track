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

querySelector:
document.querySelector("#main");
accepts a string which is a valid CSS selector.
It returns the first element that matches the CSS selector passed to the function.

querySelectorAll:
document.querySelectorAll("li");
accepts a string which is a valid CSS selector.
It returns all the elements that matches the CSS selector passed to the function.

*/
