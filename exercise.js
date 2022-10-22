const a = 24, b = 27, c = 105
let max = 0
if (a > b) {
    max = a
} else if (b > a) {
    max = b
}
if (max > c) {
    console.log(`${max === a ? 'a is the greatest number' : 'b is the greatest number'} `)
} else {
    console.log(`c is greatest number`)
}
//alternate
// if (a > max) {
//     max = a
// } else if (b > max) {
//     max = b
// } else if (c > max) {
//     max = c
// }

// console.log(max)