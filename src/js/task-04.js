const refs = {
  decrementEl: document.querySelector('[data-action="decrement"]'),
  incrementEl: document.querySelector('[data-action="increment"]'),
  totalValueEl: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementEl.addEventListener("click", onDecrementBtnClick);
refs.incrementEl.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue -= 1;
  refs.totalValueEl.textContent = counterValue;
  return counterValue;
}

function onIncrementBtnClick(event) {
  counterValue += 1;
  refs.totalValueEl.textContent = counterValue;
  return counterValue;
}
