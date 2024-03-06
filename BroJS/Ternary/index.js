const btn3 = document.getElementById("black");
const btn2 = document.getElementById("brown");
const btn1 = document.getElementById("red");
const productName = document.getElementById("product");
const totalProduct = document.getElementById("total");
let tot = document.getElementById("total");
let productQuantity = 0;

let total = 0;
let discountAmount;

btn3.onclick = function (btn3) {
  total += 50;
  discountAmount = total >= 100 ? 10 : 0;
  parseInt(++productQuantity);

  productName.innerHTML = `Black Nike Shoes- ${productQuantity}`;

  tot.innerHTML = `Total amount: ${total - total * (discountAmount / 100)}$`;
};

btn1.onclick = function () {
  total += 68;
  discountAmount = total >= 60 ? 10 : 0;
  parseInt(++productQuantity);

  productName.innerHTML = `Red Nike Shoes- ${productQuantity}`;
  tot.innerHTML = `Total amount ${total - total * (discountAmount / 100)}$`;
};

btn2.onclick = function () {
  total += 99;
  discountAmount = total >= 60 ? 10 : 0;
  productName.innerHTML = `Brown Nike Shoes- ${productQuantity}`;

  tot.innerHTML = `Total amount: ${total - total * (discountAmount / 100)}$`;
};

//Practice
let pAmount = 191;
let discount = pAmount >= 100 ? 10 : 0;

console.log(`Your total is $${pAmount - pAmount * (discount / 100)}`);
