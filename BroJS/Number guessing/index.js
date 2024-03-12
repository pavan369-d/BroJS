let userGuess;
let play = true;
let min_Number = 50;
let max_Number = 100;
const ans =
  Math.ceil(Math.random() * (max_Number - min_Number + 1)) + min_Number;

let attempts = 0;

while (play) {
  userGuess = window.prompt(
    `Enter numbers between ${min_Number} and ${max_Number}:  `
  );
  userGuess = Number(userGuess);

  if (isNaN(userGuess)) {
    alert("Enter valid number");
  } else if (userGuess < min_Number || userGuess > max_Number) {
    alert("Enter a valid number");
  } else {
    attempts++;
    if (userGuess > ans) {
      alert(`Too high attempt: ${attempts}`);
    } else if (userGuess < ans) {
      alert(`Too low attempts: ${attempts}`);
    } else {
      alert(`You guessed it right! userguess- ${userGuess}`);
      play = false;
    }
  }
}
