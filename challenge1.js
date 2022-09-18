const john_mass = 92
const mark_mass = 78

const john_height = 1.95
const mark_height = 1.69

const calc_john_bmi = john_mass / (john_height * john_height)
const calc_mark_bmi = mark_mass / (mark_height ** 2)

console.log(calc_mark_bmi, calc_john_bmi)

const markHigherBmi = calc_mark_bmi > calc_john_bmi

console.log(markHigherBmi);