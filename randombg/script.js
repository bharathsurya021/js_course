'use strict';

const colorCode = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const flipper = document.querySelector('.btn-flip')

function makeHexCode(arr) {
    let hexcode = ''
    // let randomEl = Math.trunc(Math.random() * 15) + 1

    for (let i = 0; i < 6; i++) {
        let randomEl = Math.trunc(Math.random() * 15) + 1
        hexcode += colorCode[randomEl]
    }
    return `#${hexcode}`

}

flipper.addEventListener('click', function () {
    const flipColor = makeHexCode()

    document.body.style.backgroundColor = flipColor
    document.querySelector('.bg-color').textContent = `${makeHexCode()}`
    // document.querySelector('.bg-color').style.color = flipColor
})

