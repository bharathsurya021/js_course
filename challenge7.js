const calcBmi = (mass, height) => mass / (height ** 2)
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    // calcBmi: function (mass, height) {
    //     return mass / (height ** 2)
    // },
    calcBmi: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }

}
mark.calcBmi()
john.calcBmi()
console.log((mark.calcBmi()), john.calcBmi());
const higher = mark.bmi > john.bmi ? `${mark.fullName}'s bmi (${mark.bmi}) is greater than ${john.fullName}'s(${john.bmi})` : `${john.fullName}'s bmi(${john.bmi}) is greater than ${mark.fullName}'s(${mark.bmi})`

console.log(higher);