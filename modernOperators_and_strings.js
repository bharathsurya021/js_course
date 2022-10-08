'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

const arr = [2, 3, 4]
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr // destructuring of an array
console.log(x, y, z);
console.log(arr)

const [first, second] = restaurant.categories
console.log(first, second) // first and second element of category array
const [firstel, , , thirdel] = restaurant.categories // leave an empty place to skip through and give us the third element
console.log(firstel, thirdel) // first and third element of category array

let [main, , secondary] = restaurant.categories
console.log(main, secondary);

//switching variables
// const temp = main
// main = secondary
// secondary = temp

// console.log(main, secondary) change main and secondary category

[main, secondary] = [secondary, main] //switching by destructuring
console.log(main, secondary)