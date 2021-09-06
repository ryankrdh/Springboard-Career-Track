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

** SPLICE only works with arrays. method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

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

for ...of: This statement was introduced with ECMAScript 2015 and can be used with iterable objects. It’s more convenient to write than a classic for loop if you don’t care about the current index in the loop body. *ITERATES OVER ITERABLES (arrays, strings) You cannot use this with objects.

for (let x of arr) {
    console.log(x)
}

for (let char of "PURPLE RAIN!") {
    console.log(char)
}


for ...in: Iterates over an object. Objects are not iterables. for ...in using on array or string will output index. *ITERATES OVER OBJECTS.
const chicken = {
    name: "lady gray",
    age: 4,
    color: "black"
}

for (let prop in chicken) {
    console.log(`${prop} ->${chicken[prop}]}`) 
}



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


Debugging:
Make assumptions
Test assumptions
prove assumptions 
repeat


use chrome extension debugger or console.log (simple things only)

common javascript bugs:
== is very loose about comparisons. only use ===
objects & arrays are not equal to similar objects & arrays
    [1, 2, 3] !== [1, 2, 3] arrays are reference. You cant compare them.
calling functionwith missing arguments make those arguments undefined.
calling function with extra arguments is ignored (extra arguments are ignored)
getting a missing property from object/index from array is undefined (no error is thrown)



TRY/CATCH

try {
    functionThatDoesNotExist();
} catch(e) {
    console.log("something went wrong!")
    console.log(e);
}
console.log("did we make it?")

(e) holds the value of the error caught.


FINALLY: try/catch blocks come with another optional keyword finally which will execute code regardless if an error is throw or not.
example without catch:

try {
    console.log("try")
} finally {
    console.log("finally")
}

THROW: throws a custom error.

try {
    throw new Error("I am the error")
} catch (err) {
    console.log("what king of error?", err.name);
    console.log("what is the message", err.message);
    console.log("where did it happen?", err.stack);
}

When should you use this?

* any time you want to hide errors from a user.
* any time you want to produce custom errors for your users' benefit
* it works as a nice fallback in areas of your code that could fail under unusual circumstances that were not foreseen during development.
* it can hide overly technical error messages from users who wouldn't understand them anyhow
* use it for portions of your code where you suspect errors will occur that are beyond your control


RECAP: 

* A SyntaxError happen when JavaScript is unable to parse certain syntax
* A ReferenceError occurs when JavaScript tries to access a variable that is not aware of - remember your scopes!
* A TypeError occurs when JavaScript runs an invlaid expression on the wrong type.
* You can throw your own errors using the throw keyword.
* Using try/catch/finally blocks are an excellent way to handle errors when they may be unpredictable.


Javascript treats functions are considered first-class data types since they are treated like any other data types.
functions are objects in javascript.

First Class Functions
1. functions can be passed as arguments to other functions. 
2. the return values of a function can be another function.
3. a function can be assigned to a variable.

function name (arg) {
    arg();
}

function fn() {
    console.log('This is function 2');
}

name(fn);


putting functions in arrays:
let funcs = [greet, diss]
funcs[0]()


storing functions in a variable:
const myFunc = function add(x,y) {
    return x + y;
}
myFunc(3,4)


Returning a function as a value:
function giveBirth() {
    console.log("giving birth!!")
    return function cry() {
        return "waahhhh"
    }
}


Another example:
function makeMultiplyFunc(num) {
    return function mult(x) {
        return num * x;
    }
}

const double = makeMultiplyFunc(2)
double(9)
18


THREADING IN JAVASCRIPT:
JS is single threaded. some other languages are multi threaded.


setTimeout:  It sets a timer (a countdown set in milliseconds) for an execution of a callback function, calling the function upon completion of the timer.
setTimeout(func, delay) 
3000 ms is 3 seconds.

setInterval: The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
const id = setInterval(func, 2000)
clearInterval(id)


Annonymous Functions:
setTimeout(function() {
    diss();
    diss();
}, 1000);
greet();

const printOne = function () {
    console.log(1)
}

vs.

function printOne() {

}
*/

/*
twitter 
facebook
twitch
slalom
new relic.  ignite
microsoft: i will bring diversity into the field
amazon: apprenti

diversity of race, background, 

associate, apprenticeship, junior, early career

*/
