const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
// console.log(input);
// console.log(span);

input.addEventListener("input", onSizingAbracadabra);

function onSizingAbracadabra(event) {
  span.style.fontSize = event.target.value + "px";
}
