'use strict';

/*
After every unit and subunit, summarize in 2-3 sentence what you have learned.
Paraphrase new terms, concepts, and procecures.
*/

/* 
Call Agenda:

✔ Identify your career goals and review your Career Strategy Plan

✔ Develop a job search strategy that will help you reach important milestones as you progress through this course

✔ Learn about the career coaching curriculum and coming coaching calls 

Career Strategy Plan Link:
https://docs.google.com/document/d/1eygvKotStJ8NOVc6U-Cm31VQCASD2Du4hjk9y6oRsPs/edit?usp=sharing
*/

/* 
******** QUESTIONS ********

Avoiding plagiarism.

*/

/*

HTML refresher

<label for="username">enter Username</label>
<input type="text" name="name" placeholder=""/>
<input type="submit" value="Submit your username"/>>

# The above label needs a username after the for because the input type id is username and it is used to bound the label to a form field.

# # Understand the most common input tag attributes:
* Type: Type of form control
* Name: Name of the form control. Submitted with the form as part of a name/value pair.
* Placeholder: Text that appears in the form control when it has no value set.
* Value: The initial value of the control.

You can only checkone button at a time if you have two radio buttons with the same name.


CSS refresher

specificity is important
ID > class > element selector

Basic CSS Properties

div {
    background: crimson;
    color: grey;
    font-family: Heletica;
    font-size: 18px;
    cursor: pointer;
}

font-size: rem refers to the property's inital value.

div {
    width: 10%;
    height: 20%;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
}

* Know shorthanded css properties

* Know CSS Positioning: static, fixed, relative absolute.
*/

/*
## JAVASCRIPT MUST KNOWS

This goes in the body.
<script>src="app.js"</script>


KEYWORD    |     CAN REASSIGN     |     CAN REDECLARE     |     SCOPE RULES
           |                      |                       |
var        |        YES           |         YES           |      FUNCTION
let        |        YES           |         NO            |     BLOCK
const      |        NO            |         NO            |     BLOCK



GLOBAL SCOPE: The area outside all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.

LOCAL SCOPE: Variables declared inside the functions become Local to the function and are considered in the corresponding local scope. 

FUNCTION SCOPE: Whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function. var is the keyword to define variable for a function-scope accessibility.

BLOCK SCOPE: A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

LEXICAL SCOPE: Lexical Scope
Another point to mention is the lexical scope. Lexical scope means the children scope have the access to the variables defined in the parent scope. The children functions are lexically bound to the execution context of their parents.


BOOLEANS: 

The following values are always falsy:

false
0 (zero)
-0 (minus zero)
0n (BigInt zero)
'', "", `` (empty string)
null: is an assignment value. It can be assigned to a variable as a representation of no value
undefined: means a variable has been declared but has not yet been assigned a value
NaN


Everything else is truthy. That includes:

'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)

converting truthy to falsy and falsy to truthy with NOT! operator.


Know basic STRING METHODS:

array.prototype.slice(i, j): slices from i to j and outputs. If no j, from i to end.

array.prototype.includes(i): checks to see if i exists in the array/sentence. returns boolean.

array.prototype.indexof(i): method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

array.prototype.concat(i): method concatenates the string arguments to the calling string and returns a new string.



NUMBERS:

You should be comfortable converting a number to a string.

Generating a random number

Round a number with each of the fllowing.
    Math.ceil(): function always rounds a number up to the next largest integer.
 
    Math.floor(): function returns the largest integer less than or equal to a given number.

    Math.round(): function returns the value of a number rounded to the nearest integer.


STRINGS:

you should be comfortable creating a string

converting a string to a number:
    parseInt(): method converts a string into an integer (a whole number).

    parseFloat(): method converts a string into a point number (a number with decimal points). You can even pass in strings with random text in them.

    Number():  method converts a string to a number.
    Sometimes it’s an integer. Other times it’s a point number. And if you pass in a string with random text in it, you’ll get NaN, an acronym for “Not a Number.”


Iterating through each element in a string:

first method is charAt() is a classic approach. ('banana'.charAt(2))
Bracket notation is newer ('banana'[2])

Other popular ways to iterate through a string is:

for loop: The classic approach — a simple for loop
for(let i = 0; i < 10; i++) {

}

for ...of: This statement was introduced with ECMAScript 2015 and can be used with iterable objects. It’s more convenient to write than a classic for loop if you don’t care about the current index in the loop body.


forEach(): This is the functional version of a for loop. Many people prefer it over for…of and for loops because it’s a higher-order function, and it helps to stick to a programming style that leverages immutability (see the Airbnb style guide in the references).
One downside is you need to convert the string into an array before iterating. If performance really matters in your use case (and it usually doesn’t), it might not be your first choice.
[....str].forEach(process)

copying a string: str.slice()
or assign it to an old variable.


understand iteration:
while loops:
while (i < array.length) {
    console.log(array[i]);
    i++;
}
Know how to avoide infinite loop.


Nested loops:

let matrix = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
];
for (let i = 0; i < matrix.length; i++) {
    let subArr = matrix[i];
    
    for (let j = 0; j < subArr.length; j++) {
        console.log(subArr[j]);
    }
}


Arrays:
You should be comfortable creating an array.

getting and setting elements in an array. 

Looping over an array:
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})

Remove an item by index position
let pos = fruits.indexOf('banana')
let removedItem = fruits.splice(pos, 1)

Remove an item from an index position.
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]


Other methods: push, pop, shift, unshift, indexOf

copy an array:
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]


OBJECTS
You should be comfortable creating objects
Getting and setting key value pairs in an array
iterating through objects
making copies of objects


Know the difference between dot and bracket notation.

When working with dot notation, property identifies can only be alphanumeric. Properties can't start with a number. 

When working with bracket notation, property identifiers only have to be a String. They can include any characters, including spaces. Variables may also be used as long as the variable resolves to a String.

bracket notation allows you to pass arguments dynamically.


[] === [] will return false since the reference types are different.


placing functions on objects (methods)

function greet() {
    let msg = 'hiii';
    console.log(msg)
}

const person = {name: 'timothy', talk: greet}

person.talk()



string template literals:
`hi i am a ${1+2}rd number`


*/
