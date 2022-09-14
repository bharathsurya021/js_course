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

