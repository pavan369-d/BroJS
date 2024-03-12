//Method chaining = calling one method after another in one continuous line of code
let userName = window.prompt("Enter your name: ");
userName =
  userName.trim().charAt(0).toUpperCase() +
  userName.trim().slice(1).toLowerCase();
let anotherOne = window.prompt("Enter food name: ");
anotherOne =
  anotherOne.trim().charAt(0).toUpperCase() +
  anotherOne.trim().slice(1).toLowerCase();
console.log(anotherOne);
//console.log(userName);

//No method chaining

userName = userName.trim();
let firstLetter = userName.charAt(0);
firstLetter = firstLetter.toUpperCase();

let nextChars = userName.slice(1);
nextChars = nextChars.toLowerCase();

userName = firstLetter + nextChars;
//let newSentence = firstLetter + nextChars;
//console.log(newSentence);

//console.log(userName);
