'use strict'
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players
const [gk, ...fieldPlayers] = players1

const allPlayers = [...players1, ...players2]
console.log(allPlayers)

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(playersFinal)

const { odds: { team1, x: draw, team2 } } = game

console.log(team1, draw, team2)

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `vicotry ${game[team]}`
    console.log(`Odd of ${teamStr} : ${odd}`)
}

for (const [key, value] of game.scored.entries()) {
    console.log(`Goal${key + 1}:${value}`)
}
let sum = 0
const odds = Object.values(game.odds)
for (const odd of odds) {
    sum += odd
}
const avg = sum / odds.length
console.log(avg)

const printGoals = function (...goalScorers) {

    console.log(`${goalScorers.length} goals were scored`)

    for (let i = 0; i < goalScorers.length; i++) {
        console.log(goalScorers[i])
    }

}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)
const scorers = {}
for (const goalScorer of game.scored) {
    scorers[goalScorer] ? scorers[goalScorer]++ : scorers[goalScorer] = 1
}
console.log(scorers)

team1 < team2 && console.log('Team 1 is more likely to win')
team1 > team2 && console.log('Team 2 is more likely to win')
