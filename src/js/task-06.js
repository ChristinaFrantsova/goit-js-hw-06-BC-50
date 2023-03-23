const input = document.querySelector("#validation-input");
// console.log(input.getAttribute("data-length"));
input.addEventListener("blur", onInputValitation);

function onInputValitation(event) {
  console.dir(event);
  if (event.target.value.length === Number(event.target.dataset.length)) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    // classList.remove("valid");

    event.target.classList.add("invalid");
  }
}

// ============ Не працює =============
// const inputEL = document.querySelector("#validation-input");
// // console.log(inputEL);

// inputEL.addEventListener("blur", onCounterSumbols);

// function onCounterSumbols(event) {
//   if (event.target.value.length === Number(inputEL.dataset.length)) {

//     inputEL.classList.add("valid");
//   } else {
//     inputEL.classList.remove("valid");
//     inputEL.classList.add("invalid");
//   }
// }
