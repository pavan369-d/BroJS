//const are variables that can't be changed

const pi = 3.14159;
let radius;

let circumference;

document.getElementById("submit").onclick = function () {
  radius = document.getElementById("input").value;
  radius = Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById("display-result").textContent = circumference + "cm";
};

console.log(circumference);
