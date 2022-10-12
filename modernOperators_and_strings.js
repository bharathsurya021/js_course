'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
        console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievred to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasts made with ${ing1},${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIngredients, ...otherIngredients) {
        console.log(otherIngredients)
    }
}

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')]
// console.log(ingredients)

// restaurant.orderPasta(...ingredients)
const newmenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newmenu)
//join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

console.log(menu)

const str = 'bharath'
const letters = [...str, ' ', 'N.']
console.log(letters)
console.log(...str)


//general way
const arr = [7, 8, 9]

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr)

//with spread operator

const newArr = [1, 2, ...arr]
console.log(newArr)
console.log(...newArr)

// spread operator for objects

const newRestaurant = { ...restaurant, founder: 'bharath', foundingYear: 1996 }
console.log(newRestaurant)

const restaurantCopy = { ...restaurant }
restaurantCopy.name = 'ristoranta roma'

console.log(restaurantCopy)

// restaurant.orderDelivery({ time: '23:30', address: 'via del sol, 21', mainIndex: 2, starterIndex: 3, })
// restaurant.orderDelivery({ address: 'via del sol, 21', starterIndex: 3, })



// //destructuring objects
// const { name: restaurantName, openingHours, categories } = restaurant
// console.log(restaurantName, openingHours, categories)

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters)

// //mutating variables
// let a = 111
// let b = 999
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj)

// console.log(a, b);

// //nested objects
// const { fri: { open, close } } = restaurant.openingHours
// console.log(open, close)


// console.log(restaurant.order(2, 0))

// const [starter, main] = restaurant.order(2, 0)
// console.log(starter, main)

// const nested = [2, 4, [5, 6]]

// const [a, , b] = nested

// console.log(a, b);

// // nested destructuring
// const [i, , [j, k]] = nested
// console.log(i, j, k)

// //default values

// const [p = 1, q = 1, r = 1] = [8, 9] // setting default values a 1
// console.log(p, q, r)

// const arr = [2, 3, 4]
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr // destructuring of an array
// console.log(x, y, z);
// console.log(arr)

// const [first, second] = restaurant.categories
// console.log(first, second) // first and second element of category array
// const [firstel, , , thirdel] = restaurant.categories // leave an empty place to skip through and give us the third element
// console.log(firstel, thirdel) // first and third element of category array

// let [main, , secondary] = restaurant.categories
// console.log(main, secondary);

// //switching variables
// // const temp = main
// // main = secondary
// // secondary = temp

// // console.log(main, secondary) change main and secondary category

// [main, secondary] = [secondary, main] //switching by destructuring
// console.log(main, secondary)

//Rest operator in destructuring

const myarr = [1, 2, ...[3, 4]] //spread rhs of =

const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)// rest on lhs of =

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

console.log(pizza, risotto, otherFood)

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays)

//rest operator in functions

const add = function (...numbers) { // rest parameters
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    console.log(sum)
}
add(2, 3)
add(5, 3, 4, 7)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms')
