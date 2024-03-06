const decrease = document.getElementById("decrease");
const result = document.getElementById("result");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
let val = 0;
decrease.onclick = function () {
  result.innerHTML = --val;
};

reset.onclick = function () {
  val = 0;
  result.textContent = val;
};

increase.onclick = function () {
  result.textContent = ++val;
};
