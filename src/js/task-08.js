const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // console.log(event);
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;
  if (event.target.email.value === "" || event.target.password.value === "") {
    return alert("Заповни поля для входу!");
  } else {
    const userDataObject = {
      Email: event.target.email.value,
      Password: event.target.password.value,
    };
    console.log(userDataObject);
    event.target.reset();
  }
}
