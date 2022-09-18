//understand
//-Array transforms to string, seperated by ...
// what is x days? - index+1

//Break into sub problems
// Transforming to a string
// Tranform each element in to string with °C
// string need to conatin day (index+1)
// Add ... between elements and start and end of string
const printForecast = function (arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}°C in ${i + 1} days ... `
    }
    console.log('... ' + str);
}

printForecast([17, 21, 23])
printForecast([12, 5, -5, 0, 4])
