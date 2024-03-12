/*
function happyBirthday(name, age) {
  console.log("HappyBirthday! to you");
  console.log("HappyBirthday! to you");
  console.log("HappyBirthday! to you");
  console.log(`HappyBirthday dear ${name}`);
  console.log(`You are ${age} old now.`);
}
*/

//happyBirthday("rahuk", 20);
//happyBirthday("Nayak", 30);
//happyBirthday("ram", 21);

/*
let addition = addNumber(3, 6);
console.log(addition);
console.log(addNumber(3, 4));

function addNumber(num1, num2) {
  //let ans = num1 + num2;
  //return ans;
  return num1 + num2;
}

*/

/*
function subtractNumber(num1, num2) {
  //let ans = num1 - num2;
  //return ans;
  return num1 - num2;
}

console.log(subtractNumber(5, 8));
let subtraction = subtractNumber(5, 3);
console.log(subtraction);
*/
/*
function multiplyNumber(num1, num3) {
  return num1 * num3;
}

console.log(multiplyNumber(4, 2));
let multiplication = multiplyNumber(11, 39);
console.log(multiplication);
*/

function isPrime(number) {
  let count = 0;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  return count > 2 ? "Not a Prime number" : "Prime number";
}

let primeNumber = isPrime(6);
console.log(primeNumber);
