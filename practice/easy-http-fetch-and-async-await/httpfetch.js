const createBtn = document.getElementById("create-user");
const getBtn = document.getElementById("get-user-btn");
const ulElement = document.getElementById("users");

function create(e) {
  e.preventDefault();
  const username = document.getElementById("user").value;
  if (username === "") {
    return;
  }

  const data = {
    username: username,
  };
  EasyHttpFetch.post("https://jsonplaceholder.typicode.com/users", data).then(
    (userIdObj) => {
      const divElement = document.createElement("DIV");
      divElement.textContent = `Your username is ${username} and your user id is: ${userIdObj.id}`;
      divElement.className = "username-userid";
      const line = document.querySelector(".line");
      const container = document.querySelector(".container");
      container.insertBefore(divElement, line);
    }
  );

  document.getElementById("user").value = "";
}

function getUser(e) {
  e.preventDefault();
  const userNodeArray = ulElement.childNodes;
  Array.from(userNodeArray).forEach((ele) => ele.remove());

  const users = EasyHttpFetch.get("https://jsonplaceholder.typicode.com/users");
  users.then((array) => {
    array.forEach((ele) => {
      const liElement = document.createElement("LI");
      liElement.textContent = ele.username;
      ulElement.appendChild(liElement);
    });
  });
}

function getUserAsync(e) {
  e.preventDefault();

  const userNodeArray = ulElement.childNodes;
  Array.from(userNodeArray).forEach((ele) => ele.remove());

  const easyHttpAsync = new EasyHttpAsync(
    "https://jsonplaceholder.typicode.com/users"
  );

  easyHttpAsync.get().then((res) => {
    res.forEach((ele) => {
      const liEle = document.createElement("LI");
      liEle.textContent = ele.username;
      ulElement.appendChild(liEle);
    });
  });
}

function createAsync(e) {
  e.preventDefault();
  const username = document.getElementById("user").value;
  if (username === "") {
    return;
  }

  const data = {
    username: `${username}`,
  };
  const easyHttpAsync = new EasyHttpAsync(
    "https://jsonplaceholder.typicode.com/users"
  );

  easyHttpAsync.post(data).then((userIdObj) => {
    const divElement = document.createElement("DIV");
    divElement.textContent = `Your username is ${username} and your user id is: ${userIdObj.id}`;
    divElement.className = "username-userid";
    const line = document.querySelector(".line");
    const container = document.querySelector(".container");
    container.insertBefore(divElement, line);
  });

  document.getElementById("user").value = "";
}
createBtn.addEventListener("click", createAsync);
getBtn.addEventListener("click", getUserAsync);
