const priceInput = document.querySelector(".input");
const priceButton = document.querySelector(".price-btn");

const result = document.getElementById("result");

priceButton.addEventListener("click", () => {
  const userPrices = priceInput.value;
  if (userPrices.trim() === "") {
    result.textContent = "Please enter at least one price.";
    return;
  }
  const pricesArray = userPrices.split(",");
  const cleanPrices = pricesArray.map((price) => price.trim());
  if (cleanPrices.some((price) => price === "")) {
    result.textContent = "Please don't leave any prices empty.";
    return;
  }
  const numericPrices = cleanPrices.map((cleanPrice) => Number(cleanPrice));
  if (numericPrices.some((number) => Number.isNaN(number))) {
    result.textContent = "Please enter valid number only.";
    return;
  }
  const doubledPrices = numericPrices.map((numericPrice) => numericPrice * 2);
  result.textContent = doubledPrices;
});
