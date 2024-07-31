## GUES GAME

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Number Guessing Game</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Youtube Channel</a></li>
            </ul>
        </nav>
        <nav>
            <h2>Number Guessing Game</h2>
        </nav>        
    </header>
    <section>
        <div class="container">
            <p>
                Try and guess a random number between 1 and 100.
                <br>
                You have 10 attempts to guess the right number.
            </p>
            <form action="">
                <h1>Guess a number</h1>
                <div class="form-group">
                    <input type="text" id="guessField" value="" class="form-control">
                </div>
                <div class="form-group">
                    <button type="submit" id="guessSubmit">Submit Guess</button>
                </div>
            </form>
            <div class="info" id="info">
                <p>
                    Previouse Guesses: <span id="guesses"></span>
                </p>
                <p>
                    Guesses Remaining: <span id="lastResult"></span>
                </p>
                <p id="lowOrHigh"></p>
            </div>
        </div>  
    </section>
    <script src="script.js"></script>
</body>
</html>
```

```css
*
{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    outline-color: lightslategray;
}

body
{
    background-color: #282C34;
}

header nav
{
    width: 100%;
    height: 60px;
    background: dodgerblue;    
}

header nav:last-child
{
    text-align: center;
    background-color: rgb(22, 22, 22, 0.5);
}

header nav:last-child h2
{
    color: white;
    padding-top: 15px;
}

header nav ul
{
    margin: auto;
    text-align: center;
    padding: 20px 0px;
}

header nav ul li
{
    list-style: none;
    display: inline-block;
}

header nav ul li a
{
    color: white;
    text-decoration: none;
    background-color: rgb(22, 22, 22, 0.5);
    padding: 10px 15px;
    border-radius: 5px;
}

section
{
    width: 100%;
}

section .container
{
    width: 90%;
    margin: 100px auto;
    text-align: center;
}

p
{
    margin: 10px 0px;
}

.form-group
{
    padding: 10px;
}

input[type="text"].form-control
{
    width: 300px;
    text-align: center;
    font-size: 30px;
    background-color: #282C34;
    border: 2px lightblue solid;
    padding: 5px 0px;
    border-radius: 8px;
}

input[type="text"].form-control:focus
{
    outline-color: lightblue;
}

button
{
    background-color: dodgerblue;
    color: white;
    padding: 10px 20px;
    border: 2px solid dodgerblue;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover
{
    background-color: rgb(22, 22, 22, 0.5);   
}

button:active
{
    border-color: white;
}
```

```javascript
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
```