// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits.push("coconut");
fruits.shift();
fruits.unshift("apple");
fruits.unshift("mango");
/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
*/
let numFruits = fruits.length;

//console.log(numFruits);

//console.log(fruits);
/*
for (let i = numFruits - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}
*/

// 2D array = multi-dimensional array that stores a matrix of data in rows and columns. useful for games, spreadsheets, or representing images

/*
      [X, O, X]
      [O, X, O]
      [X, O, X]


*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];

/*
matrix[0][0] = "X";
matrix[0][1] = "O";
matrix[0][2] = "X";

matrix[1][0] = "O";
matrix[1][1] = "X";
matrix[1][2] = "O";

matrix[2][0] = "X";
matrix[2][1] = "O";
matrix[2][2] = "X";

*/

/*
for (let row of matrix) {
  const rowString = row.join(" ");
  console.log(rowString);
}

*/

// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the element)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

//console.log(maximum);

let username = "Bro JS";
let letters = [...username].join("-");
/*
console.log(letters);

for (let letter of letters) {
  console.log(letter);
}


*/

let newFruits = [...fruits];
let vegetables = ["carrots", "celery", "potato"];

let food = [...newFruits, ...vegetables, "eggs", "milk"];
//console.log(food);
//console.log(newFruits);

// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
// spread = expands an array into separate elements
// rest = bundles seperate elements into an array

function openFridge(...food) {
  console.log(food);
}

function getFood(...food) {
  return food;
}

//const food1 = "pizza";
//const food2 = "hamburger";
//const food3 = "sushi";

//openFridge(food1, food2, food3);

//const foods = getFood(food1, food2, food3);

//console.log(foods);
/*
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);
console.log(total);
*/

function combineString(...strings) {
  return strings.join(" ");
}

const fullName = combineString("Mr.", "spongebob", " squarepants", "111");
console.log(fullName);
