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


The following values are always falsy:

false
0 (zero)
-0 (minus zero)
0n (BigInt zero)
'', "", `` (empty string)
null: s an assignment value. It can be assigned to a variable as a representation of no value
undefined: means a variable has been declared but has not yet been assigned a value
NaN


Everything else is truthy. That includes:

'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)








*/
