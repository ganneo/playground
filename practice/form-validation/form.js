const nameRegEx = /^[^\s][a-zA-Z\s]{2,10}$/;
const zipRegEx = /^[0-9]{5}(\-[0-9]{4})?$/;
const emailRegEx = /^[a-zA-Z\.0-9\-_]{1,}@[a-zA-Z]{1,8}\.[a-zA-Z]{2,24}$/;
const phoneRegEx = /^\(?[0-9]{3}\)?[\s\.\-]?[0-9]{3}[\s\.\-]?[0-9]{4}$/;

document
  .getElementById("name")
  .addEventListener("blur", (e) => validate(e, nameRegEx));
document
  .getElementById("zip")
  .addEventListener("blur", (e) => validate(e, zipRegEx));
document
  .getElementById("email")
  .addEventListener("blur", (e) => validate(e, emailRegEx));

document
  .getElementById("phone")
  .addEventListener("blur", (e) => validate(e, phoneRegEx));

document.getElementById("submit-btn").addEventListener("click", validateForm);

function validate(e, regEx) {
  const element = e.target;
  if (!regEx.test(element.value)) {
    element.classList.add("is-invalid");
    return;
  }

  element.classList.remove("is-invalid");
}

function validateForm(e) {
  e.preventDefault();
  const htmlCollection = document.getElementsByClassName("is-invalid");
  if (htmlCollection.length > 0) {
    return;
  }

  document.getElementById("name").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}
