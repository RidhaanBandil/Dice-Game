'use strict';
// storing frequently used elements from the html document.
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1CurrentScore = document.querySelector('#current--0');
const player2CurrentScore = document.querySelector('#current--1');
const player1Score = document.querySelector('#score--0')
const player2Score = document.querySelector('#score--1')
const diceEL = document.querySelector('.dice');
const RollButton = document.querySelector('.btn--roll');
const HoldButton = document.querySelector('.btn--hold');
const resetButton = document.querySelector('.btn--new');
let currentScore,scores,playing,activePlayer
// Starting conditions.
const init = function(){
   currentScore = 0;
   scores = [0,0];
   activePlayer = 0;
   playing = true;
   
   diceEL.classList.add('hide');
   player1Score.textContent = 0;
   player2Score.textContent = 0;
   player1CurrentScore.textContent = 0;
   player2CurrentScore.textContent = 0;
   currentScore = 0;
   scores = [0,0];
   activePlayer = 0;
   playing = true;
   document.querySelector('.player--1').classList.remove('player--winner');
   document.querySelector('.player--0').classList.remove('player--winner');
   document.querySelector('.player--0').classList.add('player--active');
   document.querySelector('.player--1').classList.remove('player--active');
   
}
init();
const switchPlayer = function(){
   activePlayer = activePlayer === 0 ? 1:0
     currentScore = 0;
     player1CurrentScore.textContent = 0;
     player2CurrentScore.textContent = 0;
     player1.classList.toggle('player--active');
     player2.classList.toggle('player--active');
}

 
// dice functionality.
RollButton.addEventListener('click',function(){
   if(playing){
    diceEL.classList.remove('hide')
 const dice = Math.trunc(Math.random() * 6) + 1;
 diceEL.src = `dice-${dice}.png`;
 if(dice !== 1){
    currentScore += dice
    document.getElementById(`current--${activePlayer}`).textContent = currentScore}
 
    
 else{
    // document.getElementById(`current--${activePlayer}`).textContent = 0
     switchPlayer()
     
 }}
})

// Hold Button functionality.
HoldButton.addEventListener('click',function(){
   if (playing){

   
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
   
       // winnning conditon
       if(scores[activePlayer] >= 100){
          playing = false
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
         diceEL.classList.add('hide');

      }else{
    switchPlayer()
      }}
})
// Reset button functionality.
resetButton.addEventListener('click',init);
   // diceEL.classList.add('hide');
   // player1Score.textContent = 0;
   // player2Score.textContent = 0;
   // player1CurrentScore.textContent = 0;
   // player2CurrentScore.textContent = 0;
   // dice = Math.trunc(Math.random() * 6) + 1;
   // currentScore = 0;
   // scores = [0,0];
   // activePlayer = 0;
   // playing = true;
   // document.querySelector('.player--1').classList.remove('player--winner');
   // document.querySelector('.player--0').classList.remove('player--winner');
   // document.querySelector('.player--0').classList.add('player--active');
   // document.querySelector('.player--1').classList.remove('player--active');
