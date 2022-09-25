'use strict';

let add = document.querySelector('.add')
let subtract = document.querySelector('.subtract')
let reset = document.querySelector('.reset')
let counter = 0
const increment = function () {
    counter += 1
    document.querySelector('.output').textContent = counter

}
const decrement = function () {
    counter -= 1
    document.querySelector('.output').textContent = counter

}
const resetter = function () {
    counter = 0
    document.querySelector('.output').textContent = counter
}
add.addEventListener('click', increment)
subtract.addEventListener('click', decrement)
reset.addEventListener('click', resetter)