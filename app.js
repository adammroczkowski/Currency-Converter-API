"use strict";

const currencyEl_one = document.querySelector("#currency-one");
const currencyEl_two = document.querySelector("#currency-two");
const amountEl_one = document.querySelector("#from");
const amountEl_two = document.querySelector("#to");

const currency_one = currencyEl_one.value;
const currency_two = currencyEl_two.value;

const URL = `https://v6.exchangerate-api.com/v6/4619d6106cfd7de61bb0e0a9/latest/${currencyEl_one.value}`;
function convert() {
  fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];
      amountEl_two.value = `${amountEl_one.value * rate}`;
    })
    .catch((error) => console.error(error));
}

currencyEl_one.addEventListener("change", convert);
amountEl_one.addEventListener("input", convert);
currencyEl_two.addEventListener("change", convert);
amountEl_two.addEventListener("input", convert);

convert();
