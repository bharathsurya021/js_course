'use strict';
//function can be used to reuse piece of code, also receive and return data back. Allows us to write maintainable code
function logger() {
    //function body
    console.log('My name is bharath');
}

logger(); //invoking/calling/running function
logger();
logger();

function fruitProcessor(apples, oranges) { // apples,oranges are paramters
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}
const appleJuice = fruitProcessor(2, 3) // store juice in appleJuice variable
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

// function declaration and expressions work same way

//function declaration
const age1 = calcAge1(1996)
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
console.log(age1);

// fn declaration can be called before they are defined coz fn declarations are hoisted.

//function expression - should be called after initialization

//const age2 = calcAge2(1997) // error: can't access before initialization
const calcAge2 = function (birthYear) {
    return 2022 - birthYear
}

//console.log(calcAge2); // stores the function expression
const age2 = calcAge2(1997)
console.log(age2);

//Arrow function (do not get this keyword)
const calcAge3 = birthYear => 2022 - birthYear
const age3 = calcAge3(1995)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years.`
}


console.log(yearsUntilRetirement(1996, 'Bharath'));

// functions calling functions

function cutFruits(fruit) {
    return fruit * 4
}
function fruitProcessor1(banana, papaya) {
    const bananas = cutFruits(banana)
    const papayas = cutFruits(papaya)

    console.log(bananas, papayas);
    const juice = `Juice with ${bananas} pieces banana and ${papayas} pieces of papaya.`
    return juice
}

const newSmoothie = fruitProcessor1(3, 5)
console.log(newSmoothie);

//Exercise array

const years = [1990, 1993, 1997, 2000,]
const index1 = calcAge1(years[0])
const index2 = calcAge1(years[1])
const index3 = calcAge1(years[2])
const index4 = calcAge1(years[3])
console.log(index1, index2, index3, index4);

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[2]), calcAge1(years[years.length - 1])]

console.log(ages);

// Array built in methods or array operations

const arr = [2, 3, 21, 6, 7]

arr.push('john')
console.log(arr);
arr.pop()
const newArray = arr.push(33)
console.log(arr);
const newLength = arr.push(16) // assign to new variable of push function gives length of updated arr
const removedElement = arr.pop() // gives removed element
console.log(newLength, newArray, removedElement);

arr.shift() // removes  first element
console.log(arr);
const addtoFirst = arr.unshift(81) // adds to first element
console.log(arr, addtoFirst);

console.log(arr.indexOf(7));

console.log(arr.includes('81'));// includes method follows strict equality to check the element is in array or not
console.log(arr.includes(81));
console.log(arr.includes(108));

//includes method used in conditional statements to check element in the array
if (arr.includes(81)) {
    console.log('isInside');
} else {
    console.log('Not found');
}