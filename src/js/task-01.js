const listOfCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategoriesEl.length}`);
// console.log(listOfCategoriesEl);

listOfCategoriesEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
