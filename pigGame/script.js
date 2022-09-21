'use strict';
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
let scores, currentScore, activePlayer, playing
const init = function () {
    //starting conditions
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true

    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0

    diceEl.classList.add('hidden')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
}

init()
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0

    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}
// //starting conditions
// score0El.textContent = 0
// score1El.textContent = 0
// diceEl.classList.add('hidden')

// const scores = [0, 0]
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true

//dice rolling functionality

btnRoll.addEventListener('click', function () {
    if (playing) {
        //generating random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1
        console.log(dice)

        //display dice
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`

        //check for dice roll -1
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore


        } else {
            //switch player
            switchPlayer()
        }
    }
})

//hold the score
btnHold.addEventListener('click', function () {
    if (playing) {
        //add current score to total score
        scores[activePlayer] += currentScore

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        //check if score >=100
        if (scores[activePlayer] >= 100) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            //switch player
            switchPlayer()
        }
    }

})

//reset the game

btnNew.addEventListener('click', init)





