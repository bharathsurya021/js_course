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

const years = [1990, 1993, 1997, 2000]
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

//Objects

const objectName = {
    firstName: 'Bharath',
    secondName: 'Surya',
    age: 2022 - 1996,
    profession: 'Teacher',
    friends: ['Ram', 'Lakshman', 'Ravana']

}

console.log(objectName.friends); //dot notation
console.log(objectName['profession']); //bracket notation

// const interest = prompt('profession,friends,firstName,lastName,age')
// console.log(interest);
// //console.log(objectName.interest);// gives undefined coz our object didn't define interest as property
// console.log(objectName[interest]);

// if (objectName[interest]) {
//     console.log(objectName[interest]);
// } else {
//     console.log('Wrong request! choose again');
// }

objectName.location = 'India'
objectName['twitter'] = 'watashibharath'

console.log(objectName);
console.log(objectName.location);

// for loop
for (let i = 1; i <= 10 && i > 0; i++) {
    console.log(`This is string ${i}`);
}

const arr1 = ['m', 1.2, [34, 68], 'john']
const types = []
for (let i = 0; i < 4; i++) {
    console.log(arr1[i]);
    // types[i] = typeof arr1[i]
    types.push(typeof arr1[i])
}
console.log(types);


//foreach loop


arr1.forEach(element => {
    console.log(element);
});

const ageArray = []

for (let i = 0; i < years.length; i++) {
    const age = 2022 - years[i]
    ageArray.push(age)
}

console.log(ageArray);


//continue and break
for (let i = 0; i < 4; i++) {
    // if (typeof arr1[i] !== 'string') {
    //     continue // skips to next iteration
    // }
    if (typeof arr1[i] === 'number') {
        break // stops the iteration 
    }
    console.log(arr1[i], typeof arr1[i]);
}




for (let i = arr1.length - 1; i >= 0; i--) {
    console.log(i, arr1[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repitition ${rep}`);
    }
}
let exercise = 1
while (exercise < 4) {
    console.log(`exercise ${exercise}`);
    let rep = 1
    while (rep <= 5) {
        console.log(`Lifting weights repitition ${rep}`);
        rep++
    }

    exercise++
}

//dice
let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice == 6) {
        console.log(`Loop about to end...`);
    }
}
console.log(dice);

//calculate temp amplitude

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calcTempAmplitude = function (temps) {
    let max = temps[0]
    let min = temps[0]
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i]
        if (typeof currentTemp === 'string') {
            continue
        }
        if (currentTemp > max) {
            max = currentTemp
        }
        if (currentTemp < min) {
            min = currentTemp
        }

    }


    console.log(max, min)
    return max - min
}

const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude)

const calcTempAmplitudeNew = function (temps1, temps2) {
    const temps = temps1.concat(temps2)
    console.log(temps);
    let max = temps[0]
    let min = temps[0]
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i]
        if (typeof currentTemp === 'string') {
            continue
        }
        if (currentTemp > max) {
            max = currentTemp
        }
        if (currentTemp < min) {
            min = currentTemp
        }

    }


    console.log(max, min)
    return max - min
}

const amplitudeNew = calcTempAmplitudeNew([1, 3, -1, 5, "error"], [23, -9, 34, 33])
console.log(amplitudeNew)
