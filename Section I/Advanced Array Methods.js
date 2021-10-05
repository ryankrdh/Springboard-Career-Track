'use strict';

/* 
CALLBACKS

function add (x,y) {}
function subtract () {}
function multiply () {}
function divide () {}

const mathFuncs = [add, subract, multiply, divide]

mathFuncs[3](4,5)


forEach:

* Loops through an array.
* Runs a callback function for each value in the array and then returns undefined.
* forEach will always return undefined - no matter what.

*/

/*

const colors = ['teal', 'cyan', 'peach', 'purple'];

// the arr will result in entire arrays and is rarely used.
colors.forEach(function (val, i, arr) {
  const caps = val.toUpperCase();
  console.log(`At index ${i}, ${caps}`);
  console.log(arr);
});

// for Each ----------------------------------------------------------

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
prices.forEach(function (price) {
  total += price;
});
console.log(total);

// for of ------------------------------------------------

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
// for loop: for(let i = 0; i < prices.length; i ++)
for (let price of prices) {
  total += price;
}
console.log(total);
// DIFFERENCE BETWEEN FOR OF, FOR LOOP, FOR EACH:
// for of is a newer concept and for each has been around for a long time.
// Did not have for of back then. forEach came before for of
// forEach is mildly useful at best.


const colors = ['teal', 'cyan', 'peach', 'purple'];

// creating your own forEach function
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// testing the forEach function
forEach(colors, function (color, i) {
  console.log(color.toUpperCase(), `index of ${i}`);
});

// regular forEach function
colors.forEach(function (color, i) {
  console.log(color.toUpperCase(), `index of ${i}`);
});


*/

/*
JS ARRAY METHODS - MAP

// Map is very useful.
// pass in a callback and it calls that function once in the array. ForEach calls the function and doesn't do much with it. 

// When map calls the function: 
// creates a new array
// iterates through an array
// runs a callback function for each value in the array. 
// adds the result of that callback function to the new array
// returns the new array.
// map always returns a enw array of the same length.
 
let numbers = [1, 2, 3];

numbers.map(function(value, index, array) {
    return value * 10;
});


const numbers = [21, 37, 64, 99, 142];

const negatives = numbers.map(function (num) {
  return num * -1;
});

// ** Use forEach if you just wanted to console.log the results. map will return an aray of undefined.
const doubles = numbers.map(function (num) {
  console.log(num * 2);
});



const todos = [
  {
    id: 1,
    text: 'walk the dog',
    priority: 'high',
  },
  {
    id: 2,
    text: 'walk the chickens',
    priority: 'medium',
  },
  {
    id: 3,
    text: 'feed the cats',
    priority: 'low',
  },
  {
    id: 4,
    text: 'Put out the fire in my garage ',
    priority: 'very high',
  },
];

// isolating the texts from todos.
const todoText = todos.map(function (todo) {
  return todo.text;
});

// links is currently a nodeList not an array. But we can make it into an array.
// const links = document.querySelectorAll('a');
// Array.from(links);

const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function (a) {
  return a.href;
});

// ---------------------------------------------------

// creating my own Map
const todos = [
  {
    id: 1,
    text: 'walk the dog',
    priority: 'high',
  },
  {
    id: 2,
    text: 'walk the chickens',
    priority: 'medium',
  },
  {
    id: 3,
    text: 'feed the cats',
    priority: 'low',
  },
  {
    id: 4,
    text: 'Put out the fire in my garage ',
    priority: 'very high',
  },
];

// myMap([1, 2, 3], function (val) {
//   return val * 3;
// });

function myMap(arr, callback) {
  const mappedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const val = callback(arr[i], i, arr);
    mappedArray.push(val);
  }
  return mappedArray;
}

const priorityMap = myMap(todos, function (todo) {
  return todo.priority;
});

*/

/*
// JS ARRAY METHODS - FILTER

 let letters = ['a', 'b', 'c', 'b', 'c'];

 const filteredLetters = letters.filter(function(value, index, array) {
     return value === 'b';
 });



const words = [
  'immunoelectrophoretically',
  'rotavator',
  'tsktsk',
  'psychophysicotherapeutics',
  'squirrelled',
  'crypt',
  'uncopyrightable',
  'cysts',
  'pseudopseudohypoparathyroidism',
  'unimaginatively',
];

const longWords = words.filter(function (word) {
  return word.length >= 20;
});

const cOrUWords = words.filter(function (w) {
  return w[0] === 'u' || w[0] === 'c';
});

// -------------------------------

const containsVowel = function (word) {
  for (let char of word) {
    if (isVowel(char)) return true;
  }
  return false;
};

// if it doesn't exist, it would output -1.
const isVowel = function (char) {
  return 'aeiou'.indexOf(char) !== -1;
};

const containVowels = words.filter(containsVowel);
const containNoVowels = words.filter(function (word) {
  return !containsVowel(word);
});


// -----------------------------------------------

// map and filter example:

// creates an array of all the inputs
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]')

// creates a filter to find .checked method.
// Array.from converts the array.
const checked = Array.from(allCheckboxes).filter(function (box) {
    return box.checked;
});

// instead of outputing 'inputs', get the inner text.
const completedItems = checked.map(function (checkbox) {
    return checkbox.parentElement.innerText;
});

// chaining the two functions above.
function extractCompletedTodos() {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    return Array.from(allCheckboxes)
    .filter(function (box) {
        return box.checked;
    })
    .map(function (checkbox) {
        return checkbox.parentElement.innerText;
    });
};

// --------------------------------------------------
// writing your own filter.

function myFilter(arr, callback) {
    const filteredArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            filteredArray.push(arr[i])
        }
    }
    return filteredArray;
 }

const shorties = myFilter(words, function(word) {
    return word.length<= 10; 
 });

const everyOtherWord = myFilter(word, function(word, i) {
    return i % 2 === 0 
 })

*/

/*
// ------------------------------------------------------
// JS Array Methods - SOME and EVERY

// Unline map and filter, it does not return an array. just returns a boolean value. 
// If one element returns true, the eniter method returns true. also called 'any'

let numbers = [1, 2, 3];

// This will return true.
numbers.some(function(value, index, array) {
    return value < 3;
})

// This will return false.
numbers.some(function(value, index, array) {
    return value > 10;
})


words.some(function(word) {
    return word.length > 25;
})

words.some(function(word) {
    return word.indexOf('thyroid')  !== -1
})

words.every(function(w) {
    return w.length > 5;
})

function allStrings(arr) {
    return arr.every(function(el) {
        return typeof el === 'string'
    }); 
} 


const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Using array.from since checkboxes is a node list
    const allChecked = Array.from(checkboxes).every(function(checkbox){
        return checkbox.checked
    });
    console.log(allChecked);
*/

/*
// Implementing some and every on your own


function mySome(arr, callback) {
  for (let i = 0; i <= arr.length; i++) {
    if (callback(arr[i], i, arr)) return true;
  }
  return false;
}

// array and callback function
mySome([4, 5, 6], function (n) {
  return n > 5;
});

// ---------------------------------------------

function myEvery(arr, callback) {
  for (let i = 0; i <= arr.length; i++) {
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
}

myEvery([4, 5, 6], function (n) {
  return n > 5;
});

*/
/*
// FIND

// Iterates through an array
// Runs a callback on each value in the array
// if the callback returns true at any point, return the value int he array that we're iterating over. It only returns the first matched



const scores = [0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93];

scores.find(function (score) {
  return score > 75;
});

// use .findIndex instead of index of for more complicated cases.

// finds the first even number
scores.find(function(score) {
    return score !== 0 && score % 2 === 0;
})

// finds all the even numbers
const evenScores = scores.filter(function(score) {
    return score % 2 === 0; 
})

// finds the index of the first even.
const firstEven = scores.findIndex(function(score) {
    return score !== 0 && score% 2 === 0;
});

// When the function doesn't find the index. This will result in -1
scores.findIndex(function(score) {
    return score > 100;
}) 

// dividing an array into two arrays.
function partition(arr, pivot) {
    const pivotIdx = arr.findIndex(function(el) {
        return el > pivot;
    });
    const left = arr.slice (0, pivotIdx);
    const right = arr.slice(pivotIdx);
    return [left, right]
}

*/

/*
// writing my own find / findIndex methods

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return arr[i];
  }
}

function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return i;
  } else {
      return -1;
  }
}


*/

// Do I need to keep writing my own methods?? (some, every, forEach, map, filter)
