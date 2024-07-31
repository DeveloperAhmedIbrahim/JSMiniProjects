"use strict"

let randomNumber = parseInt((Math.random()*100)+1);

const guessField = document.querySelector('#guessField');
const guessSubmit = document.querySelector('#guessSubmit');
const guesses = document.querySelector('#guesses');
const lastResult = document.querySelector('#lastResult');
const lowOrHigh = document.querySelector('#lowOrHigh');
const info = document.querySelector('#info');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame)
{
    guessSubmit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(guessField.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess)
{
    if(isNaN(guess) || (guess < 1 || guess > 100))
    {
        alert('Please enter a valid number.');
    } 
    else
    {
        prevGuess.push(guess);
        if(numGuess === 10)
        {
            displayGuess(guess);
            displayMessage('Game Over.');
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{
    if(guess === randomNumber)
    {
        displayMessage('WOW! You guessed right :)');
        endGame();
    }
    else
    {
        displayMessage(`Opps :( Right number is ${randomNumber}`);
    }
}

function displayGuess(guess)
{
    guessField.value = '';
    guesses.innerHTML += `&nbsp;${guess}`;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`;      
}

function displayMessage(message)
{
    lowOrHigh.innerHTML = `<hr><br><h3>${message}</h3>`;
}

function endGame()
{
    guessField.value = '';
    guessField.setAttribute('disabled', '');
    p.innerHTML = `<div class="form-group">
        <button type="submit" id="newGame">Start New Game</button>
    </div>`;
    info.appendChild(p);
    playGame = false;
    newGame();
}

function newGame()
{
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', function(event){
        prevGuess = [];
        numGuess = 1;
        randomNumber = parseInt((Math.random()*100)+1);
        guesses.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;      
        guessField.removeAttribute('disabled');
        info.removeChild(p);
        lowOrHigh.innerHTML = '';
        playGame = true;
    });
}
