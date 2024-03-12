// DICE Roller Program

function rollDice() {
  const input = document.getElementById("input");
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const numOfDice = input.value;

  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="./assests/${value}" alt="dice ${value}">`);
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
