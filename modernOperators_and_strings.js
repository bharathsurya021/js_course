'use strict';
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
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
}
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // openingHours: openingHours, -dont't need to use like this anymore

    // Es6 enhanced object literals
    openingHours,
    // order: function (starterIndex, mainIndex) {
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    // },
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
        console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievred to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasts made with ${ing1},${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredients, ...otherIngredients) {
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

//Use any data type, return any data type,short-circuiting
//if first value is truthy, js does not even look at second value in case of OR shor circuit
console.log(3 || 'jonas')
console.log(0 || 'jonas')
console.log(true || 0)
console.log(undefined || null)

console.log(undefined || 0 || '' || 'Hello' || 23)//first truthy value returns
// setting default values using short-circuiting is much easier than iternary operators or if else statements

restaurant.numGuests = 0
const guests1 = restaurant.numGuests ? numGuests : 10
console.log(guests1)
restaurant.numGuests = 22

//set default values using OR
const guest2 = restaurant.numGuests || 10
console.log(guest2)

//Null coalescing operator
//Nullish:null and undefined(0 and ''are not included in falsy values)
const guest3 = restaurant.numGuests ?? 10
console.log(guest3)

//And short-circuiting- shortcircuits when first value is falsy and doesn't even look at second one, if 1st is truthy return second value
console.log('___AND___')
console.log(0 && 'Jonas')
console.log(7 && 'Jonas')
console.log('hello' && 23 && null && 'Jonas')

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach')
}
//execute second one if first one is true using AND
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
//for-of loop

for (const item of menu) console.log(item)
// for (const item of menu.entries()) {
//     console.log(item)
//     console.log(`${item[0] + 1}: ${item[1]}`)
// }

for (const [index, element] of menu.entries()) {
    console.log(`${index + 1}: ${element}`)
}

//without optional chaining
// console.log(restaurant.openingHours.mon.open) //-error
//optional chaining
console.log(restaurant.openingHours?.mon?.open)
console.log(restaurant.openingHours.mon?.open)

for (const day of days) {
    console.log(day)
    const open = restaurant.openingHours[day]?.open ?? 'Closed'
    console.log(`On ${day},we open at ${open}`)
}

//Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')
console.log(restaurant.orderRoisotto?.(0, 1) ?? 'Method does not exist')

//Looping objects
const properties = Object.keys(openingHours)
console.log(properties)
let openStr = `we are open on ${properties.length} days:`
for (const day of Object.keys(openingHours)) {
    openStr += `${day}, `
}
console.log(openStr)

//property values
const values = Object.values(openingHours)
console.log(values)

//Entries object

const entries = Object.entries(openingHours)
console.log(entries)

for (const [key, { open, close }] of entries) {
    console.log(`On ${key}, we open at ${open} and close at ${close}`)
}

//Sets - unique set of elements and order of elements in the set is irrelevant

const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])

console.log(orderSet)

console.log(new Set('Jonas'))

console.log(orderSet.size)

console.log(orderSet.has('Pizza'))//similar to includes in array data tipe
console.log(orderSet.has('Bread'))

orderSet.add('Garlic Bread')
orderSet.delete('Risotto')
console.log(orderSet)

// orderSet.clear() - clear the entire set
console.log(orderSet)

for (const order of orderSet) console.log(order)

// Example

const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef']

const staffUniq = new Set(staff)
const staffUnix = [...new Set(staff)]
console.log(staffUniq, staffUnix)

//Maps

const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal')
)

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed')
console.log(rest.get('name'))
console.log(rest.get('open'))
console.log(rest.get(1))

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'))
rest.delete(2)
console.log(rest)
console.log(rest.size)
rest.clear()
// rest.set([1, 2], 'Test')
// console.log(rest)
// console.log(rest.get([1, 2]))
const testarr = [1, 2]
rest.set(testarr, 'Test')
// rest.set(document.querySelector('h1'), 'Heading')
console.log(rest)

//Map iterables

const question = new Map(
    [['question', 'What is the best programming lang in world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'Try again']]
)
console.log(question)

// convert object to map

console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap)

//Quiz app
// const answer = Number(prompt('Your answer'))
const answer = 3
for (const [key, value] of question) {
    if (typeof (key) === 'number') { console.log(`Answer ${key}:${value}`) }

}

console.log(answer)
if (question.get('correct') === answer) {
    console.log(question.get(true))
} else {
    console.log(question.get(false))
}

//convert map to an array
console.log([...question])