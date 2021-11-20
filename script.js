//   //when number entered is too high
//   else if (guess > number) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high, guess lower';
//       --score;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '!!You lost!!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //when number entered is too low
//   else if (guess < number) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low, guess higher';
//       --score;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '!!You lost!!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

'use strict';
console.log(document.querySelector('.message').textContent);

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  //when no number is entered
  if (!guess) {
    displayMessage('No number entered');
  }
  //when player wins
  else if (guess === number) {
    displayMessage('We have a winner');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when guess is different
  else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Too high, guess lower' : 'Too low, guess higher';
      displayMessage(
        guess > number ? 'Too high, guess lower' : 'Too low, guess higher'
      );
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '!!You lost!!';
      displayMessage('!!You lost!!');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.btn.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    //to restore displayed text
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';

    //missed adding this line of code
    const number = Math.trunc(Math.random() * 20) + 1;
  });
});
