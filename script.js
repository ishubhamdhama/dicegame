'use strict';
//creating Elemenet
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;

//hide the dice
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//switch player-----------
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
//generate random dice roll
btnRoll.addEventListener('click', function () {
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${randomNum}.png`;
    diceEl.classList.remove('hidden');

    if (randomNum !== 1) {
        currentScore += randomNum;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
});

btnHold.addEventListener('click', function () {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
        alert(`Player ${activePlayer + 1} wins!`);
    } else {
        switchPlayer();
    }
});

//game resetting--------------
btnNew.addEventListener('click', function () {
    scores[0] = 0;
    scores[1] = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
});