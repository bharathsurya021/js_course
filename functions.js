'use strict';
//deafult parameters
const bookings = []
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH124', 2)

const flight = 'LH124';
const jonas = {
    name: 'Bharath',
    passport: 235771894569
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 235771894569) {
        console.log('check in')
    } else {
        console.log('wrong passport')
    }
}

checkIn(flight, jonas)
console.log(flight)
console.log(jonas)

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000)
}

newPassport(jonas)
checkIn(flight, jonas)

//IIFE- immediately invoked function expression

//regular fn expression
const runOnce = function () {
    console.log("This will never run again")
}

runOnce();
//IIFE
(function () {
    console.log("This will never run again")
})();

(() => console.log("this will never run again"))()

//closures

const secureBooking = function () {
    let passengerCount = 0; //cant accessed or manipulated outside
    return function () {
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}

//By the time booker execution context created in call stack the secure booking EC is already popped out of stack(already returned) but because of closure the booker fn has access to the variable env of secure booking EC
const booker = secureBooking()

//booker fn is closed over its parents scope or parents variable env

booker()
booker()
booker()

console.dir(booker)

//closure examples

let f;
const g = function () {
    const a = 23;
    f = function () { //f is closed over the variables of EC in which it was defined. Even when f is not defined in the same scope/vE
        console.log(a * 2)
    }
}

const h = function () {
    const b = 789;
    f = function () {
        console.log(b * 2)
    }
}
g();
f();
console.dir(f)
h();
f();

console.dir(f)

//timer - closure example



const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function () {
        console.log(`We are boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup} passenger`)
    }, wait * 1000)
    console.log(`'Will start boarding in ${wait} seconds'`)
}
setTimeout(function () {
    console.log('Timer')
}, 5000)

const perGroup = 1000;

boardPassengers(240, 3)