'use strict';
//function can be used to reuse piece of code, also receive and return data back
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