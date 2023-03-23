const inputNameEl = document.querySelector("#name-input");
const spanNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  spanNameEl.textContent = event.target.value;
  // event.target.value - поточне значення кліка по інпуту

  if (event.target.value === "") {
    return (spanNameEl.textContent = "Anonymous");
  }
}
