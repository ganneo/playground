document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name").value;
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(name)) {
    document.getElementById("name").classList.add("is-invalid");
    return;
  }
  document.getElementById("name").classList.remove("is-invalid");
}
function validateZip() {
  const zip = document.getElementById("zip").value;
  const re = /^[1-9]{5}(-[1-9]{4})?$/;
  if (!re.test(zip)) {
    document.getElementById("zip").classList.add("is-invalid");
    return;
  }
  document.getElementById("zip").classList.remove("is-invalid");
}
function validateEmail() {
  const email = document.getElementById("email").value;
  const re = /^[a-zA-Z1-9\.-]{1,}@[a-zA-z]{2,29}.[a-z]{3}/;
  if (!re.test(email)) {
    document.getElementById("email").classList.add("is-invalid");
    return;
  }
  document.getElementById("email").classList.remove("is-invalid");
}
function validatePhone() {}
