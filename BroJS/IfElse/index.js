const displayResult = document.querySelector("h2");
const inp = document.querySelector("input");
const submit = document.getElementById("submit");
let result;

submit.onclick = function (result) {
  result = parseInt(inp.value);

  if (result >= 100) {
    displayResult.innerHTML = `You are too old to enter this site.`;
  } else if (result < 0) {
    displayResult.innerHTML = `Your age cannot be less than zero.`;
  } else if (result == 0) {
    displayResult.innerHTML = `You are just born.`;
  } else if (result < 18) {
    displayResult.innerHTML = `You are too young to enter this site.`;
  } else {
    displayResult.innerHTML = `You are welcome to this site.`;
  }
};
