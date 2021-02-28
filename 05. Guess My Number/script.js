'use strict';

/*
// Query Selector
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


// EventListener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  // When player wins
  else if (guess == secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    setHighScore(score);
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
        score--;
        displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
  }
});


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})

const setHighScore = function(score) {
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}