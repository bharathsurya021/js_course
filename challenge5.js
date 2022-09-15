const calcAverage = (score1, score2, score3) => { return (score1 + score2 + score3) / 3 }

let scoreDolphins = calcAverage(85, 54, 41)
let scoreKoalas = calcAverage(23, 34, 27)

console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgDolphins} vs ${avgKoalas})`

    } else {
        return 'No team wins'
    }
}

const winner = checkWinner(scoreDolphins, scoreKoalas)

scoreDolphins = calcAverage(44, 23, 71)
scoreKoalas = calcAverage(65, 54, 49)
const winner1 = checkWinner(scoreDolphins, scoreKoalas)

console.log(`Game 1: ${winner1}, Game 2:${winner}`);