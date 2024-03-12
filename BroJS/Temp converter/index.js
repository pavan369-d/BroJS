const input = document.getElementById("textcontent");
const toFahrenheit = document.getElementById("tofahrenheit");
const toCelcius = document.getElementById("tocelcius");
const result = document.querySelector("p");

let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(input.value);
    temp = (9 / 5) * temp + 32;

    result.textContent = `${temp.toFixed(1)} °F`;
  } else if (toCelcius.checked) {
    temp = Number(input.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = `${temp.toFixed(1)} °C`;
  } else {
    result.textContent = "Select a unit";
  }
}
