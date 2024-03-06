const subscribe = document.getElementById("subscribe");
const paypal = document.getElementById("paypal");
const rupay = document.getElementById("rupay");
const master = document.getElementById("master");
const visa = document.getElementById("visa");
const submit = document.getElementById("submit");
const checkSub = document.getElementById("check-subscibe");
const checkPay = document.getElementById("check-payment");

submit.onclick = function () {
  if (subscribe.checked) {
    checkSub.innerText = `You have subscribed`;
  } else {
    checkSub.innerText = `You have not subscribed`;
  }

  if (paypal.checked) {
    checkPay.innerText = `You have selected payment through paypal`;
  } else if (rupay.checked) {
    checkPay.textContent = `You have selected payment through Rupay`;
  } else if (master.checked) {
    checkPay.textContent = `You have selected payment through MasterCard`;
  } else if (visa.checked) {
    checkPay.textContent = `You have selected payment through Visa`;
  } else {
    checkPay.textContent = `Please choose a payment method`;
  }
};
