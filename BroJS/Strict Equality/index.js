//  = assignment operator
// == comparision operator (compares if values are equal)
// === strict equality operator (compare if values & datatypes are equal)
// != inequality operator
// !== strict inequality operator

const value = 9;

let answer_1 = value == "9" ? "They are equal" : "They are not equal";

console.log(answer_1);

let answer_2 = value != "9" ? "They are not equal" : "They are equal";
console.log(answer_2);

if (value === "9") {
  console.log("They are equal");
} else {
  console.log("They are not equal");
}

if (value !== "9") {
  console.log("They are not equal");
} else {
  console.log("They are equal");
}
