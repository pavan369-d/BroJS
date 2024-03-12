let userName = "BroJSo";

//userName=userName.charAt(1)- returns character at index 1
//userName=userName.indexOf("o")- returns index of o
//userName=userName.lastIndexOf("o")- returns last occouring index of letter o
//userName=userName.trim(); -removes white space at starting and ending
//userName=userName.length- returns the length of the string
//userName=userName.toUpperCase()- transform letters of string to uppercase
//userName=userName.toLowerCase()- transform letters of string to lowercase
//userName=userName.repeat(2)- repeats string two times
//userName = userName.startsWith(" ");- checks if the string starts with whitespace returns true if it is
//userName = userName.includes(" ");- checks and returns boolean values
//console.log(userName);

let phoneNumber = "123-456";

//phoneNumber = phoneNumber.replaceAll("-", "");- replace the character with specified charater in whole string
//phoneNumber = phoneNumber.replaceAll("-", "/");

//phoneNumber = phoneNumber.padStart(8, "0");- pads at starting with specified character with length upto 8 i.e original length 7 and extra 1 total 8 chars
//phoneNumber = phoneNumber.padEnd("15", 0);- pads at the end upto 15 chars
//console.log(phoneNumber);

/*String slicing*/

const fullName = "Bro JS";

//let firstName = fullName.slice(0, 3);
//let lastName = fullName.slice(4);

//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1);
//console.log(firstName, lastName);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
//console.log(firstName);
//console.log(lastName);
//console.log(lastChar);

const email = `zolo@gmail.com`;

let userNam = email.slice(0, email.indexOf("@"));
let lastNam = email.slice(email.indexOf("@") + 1);
let sentence = `Solo leveling is a good anime`;
//sentence = sentence.slice(4, sentence.indexOf("g") + 1);
//sentence = sentence.slice(18, sentence.indexOf("d") + 1);
sentence = sentence.slice(23);
console.log(sentence.trim());
console.log(userNam);
console.log(lastNam);
