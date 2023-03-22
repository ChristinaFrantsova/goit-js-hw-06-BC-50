const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsMarkup = document.querySelector("#ingredients");
// 1.Створить окремий елемент <li>. Обов'язково використовуй
// метод document.createElement
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.

const itemsArr = ingredients.map((element) => {
  const liItem = document.createElement("li");
  liItem.textContent = element;
  liItem.classList.add("item");
  // console.log(liItem);
  return liItem;
});

ingredientsMarkup.append(...itemsArr);
