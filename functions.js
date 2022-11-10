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