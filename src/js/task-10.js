function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

// // inputEl.addEventListener("input", createBoxes(inputEl.value));

createBtn.addEventListener("click", () => {
  let amount = inputEl.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);

let startSize = 30;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const newDivMarkup = document.createElement("div");
    boxesEl.append(newDivMarkup);

    newDivMarkup.style.width = startSize + "px";
    newDivMarkup.style.height = startSize + "px";
    newDivMarkup.style.backgroundColor = getRandomHexColor();

    startSize += 10;
  }
}

function destroyBoxes() {
  boxesEl.innerHTML("");
}
// const destroyBoxes = (event) => (boxesEl.innerHTML = "");
// ===============1==========

// const getEl = (selector) => document.querySelector(selector);
// const boxes = getEl("#boxes");
// let startSize = 30;

// function createBoxes(amount) {
//   for (let i = 1; i <= amount; i++) {
//     const newDiv = document.createElement("div");
//     boxes.append(newDiv);

//     newDiv.style.width = startSize + "px";
//     newDiv.style.height = startSize + "px";
//     newDiv.style.backgroundColor = getRandomHexColor();

//     startSize += 10;
//   }
// }

// getEl("[data-create]").addEventListener("click", () => {
//   const amount = getEl('input[type="number"]').value;
//   createBoxes(amount);
// });

// getEl("[data-destroy]").addEventListener("click", () => {
//   boxes.innerHTML = "";
//   startSize = 30;
// });

// ===============2================
// const inputEl = document.querySelector("input");
// const btnCreate = document.querySelector("[data-create]");
// const btnDestroy = document.querySelector("[data-destroy]");
// const divEl = document.querySelector("#boxes");

// let number = 0;
// inputEl.addEventListener(
//   "input",
//   (event) => (number = event.currentTarget.value)
// );

// function createBoxes(amount) {
//   const elements = [];

//   for (let i = 0; i < number; i += 1) {
//     const element = document.createElement("div");
//     element.style.height = "30px";
//     element.style.width = "30px";
//     element.style.backgroundColor = getRandomHexColor();
//     elements.push(element);
//   }
//   divEl.append(...elements);

//   for (let i = 1; i < elements.length; i += 1) {
//     elements[i].style.height = `${
//       Number.parseInt(elements[i - 1].style.height) + 10
//     }px`;
//     elements[i].style.width = `${
//       Number.parseInt(elements[i - 1].style.width) + 10
//     }px`;
//   }
// }

// const destroyBoxes = (event) => (divEl.innerHTML = "");

// btnCreate.addEventListener("click", createBoxes);
// btnDestroy.addEventListener("click", destroyBoxes);
