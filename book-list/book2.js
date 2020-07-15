const tbody = document.getElementById("book-table");
const keyName = "books";

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  // save to local storage
  saveToLocalStorage() {
    const oldMessage = localStorage.getItem(keyName);
    const bookArray = oldMessage ? JSON.parse(oldMessage) : [];
    bookArray.push(this);
    localStorage.setItem(keyName, JSON.stringify(bookArray));
  }

  // remove form local storage
  removeFromLocalStorage() {
    const bookArray = JSON.parse(localStorage.getItem(keyName));
    const newBookArray = bookArray.filter((ele) => {
      if (
        ele.title === this.title &&
        ele.author === this.author &&
        ele.isbn === this.isbn
      ) {
        return false;
      }
      return true;
    });
    localStorage.setItem(keyName, JSON.stringify(newBookArray));
  }

  // create tr
  createTr() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${this.title}</td>
        <td>${this.author}</td>
        <td>${this.isbn}</td>
        <td><i class="fas fa-trash-alt"></i></td>
        `;
    return tr;
  }

  // validate
  validate() {
    if (!this.title || !this.author || !this.isbn) {
      return false;
    }

    return true;
  }
}

function showMessage(message, className) {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = message;
  const container = document.querySelector(".container");
  const form = document.getElementById("book-form");
  container.insertBefore(div, form);

  setTimeout(() => {
    div.remove();
  }, 3000);
}

const submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const book = new Book(title, author, isbn);

  if (!book.validate()) {
    showMessage("Check Your Values!", "unsuccessful");
    return;
  }

  showMessage("Book Added!", "successful");

  const tr = book.createTr();
  tbody.appendChild(tr);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";

  book.saveToLocalStorage();
});

document.addEventListener("DOMContentLoaded", () => {
  const bookString = localStorage.getItem(keyName);
  if (!bookString) {
    return;
  }

  const bookArray = JSON.parse(bookString);
  bookArray.forEach((ele) => {
    const title = ele.title;
    const author = ele.author;
    const isbn = ele.isbn;

    const book = new Book(title, author, isbn);
    const tr = book.createTr();
    tbody.appendChild(tr);
  });
});

tbody.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    const trElement = e.target.parentElement.parentElement;
    const title = trElement.childNodes[1].textContent;
    const author = trElement.childNodes[3].textContent;
    const isbn = trElement.childNodes[5].textContent;
    const book = new Book(title, author, isbn);
    book.removeFromLocalStorage();
    trElement.remove();
  }
});
