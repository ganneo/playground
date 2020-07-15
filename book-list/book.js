class AddToLocalStorage {
  constructor(keyName, newMessage) {
    this.keyName = keyName;
    this.newMessage = newMessage;

    const oldMessage = localStorage.getItem(keyName);
    const oldArray = oldMessage ? JSON.parse(oldMessage) : [];
    oldArray.push(newMessage);
    localStorage.setItem(keyName, JSON.stringify(oldArray));

    // if (!oldArray) {
    //   localStorage.setItem(keyName, JSON.stringify(new Array(newMessage)));
    // } else {
    //   oldArray.push(newMessage);
    //   localStorage.setItem(keyName, JSON.stringify(oldArray));
    // }
  }
}

class MakeElementFromLocalStorage {
  constructor(keyName) {
    this.keyName = keyName;

    const array = JSON.parse(localStorage.getItem(keyName));
    const tr = document.createElement("tr");
    array.forEach(function () {});
  }
}

class getFromLocalStorage {
  constructor(keyName) {
    this.keyName = keyName;
    localStorage.getItem(keyName);
  }
}

class Alert {
  constructor(message, id) {
    this.message = message;
    this.id = id;

    const div = document.createElement("div");
    div.id = id;
    div.textContent = message;
    const container = document.querySelector(".container");
    const header = document.querySelector("h1");
    container.insertBefore(div, header);

    setTimeout(function () {
      document.getElementById(`${id}`).remove();
    }, 3000);

    if (document.getElementById(id).length > 1) {
      document.getElementById(`${id}`).remove();
    }
  }
}

function addBook(e) {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const isbn = document.querySelector("#isbn");
  e.preventDefault();
  if (title.value === "" || isbn.value === "") {
    new Alert("Please Check Your Values!", "unsuccessful");
    return;
  }
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th>${title.value}</th>
    <th>${author.value}</th>
    <th>${isbn.value}</th>
    <th><i class="fas fa-eraser button button-primary fa-2x"></i></th>
    `;
  const tbody = document.querySelector("tbody");
  tbody.appendChild(tr);

  new Alert("Book Added!", "successful");
  new AddToLocalStorage("book", `${title.value},${author.value},${isbn.value}`);

  title.value = "";
  author.value = "";
  isbn.value = "";
}

function deleteBook(e) {
  const deleteBtn = document.querySelector(".fas.fa-eraser");
  if (e.target === deleteBtn) {
    e.target.parentElement.parentElement.remove();
    new Alert("Book Deleted!", "deleted");
    return;
  }
}

document.querySelector("tbody").addEventListener("click", deleteBook);
document.getElementById("btn-submit").addEventListener("click", addBook);
