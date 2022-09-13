const john_mass = 92
const mark_mass = 78

const john_height = 1.95
const mark_height = 1.69

const calc_john_bmi = john_mass / (john_height * john_height)
const calc_mark_bmi = mark_mass / (mark_height ** 2)


if (calc_mark_bmi > calc_john_bmi) {
    console.log(`Mark's BMI(${calc_mark_bmi}) is higher than John's(${calc_john_bmi}) BMI`);
}