function fetchText() {
  fetch("fetch.text")
    .then((response) => {
      const responseTextPromise = response.text();
      return responseTextPromise;
    })
    .then((responseText) => {
      const liElement = document.createElement("LI");
      liElement.textContent = responseText;
      const ulElement = document.getElementById("fetched");
      ulElement.appendChild(liElement);
    });
}
function fetchJson() {
  fetch("fetch.json")
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.forEach((ele) => {
        const liElement = document.createElement("LI");
        liElement.textContent = ele.title;
        const ulElement = document.getElementById("fetched");
        ulElement.appendChild(liElement);
      });
    });
}

function fetchApi() {
  const ulElement = document.getElementById("fetched");
  const ulChildNodes = ulElement.childNodes;
  Array.from(ulChildNodes).forEach((ele) => ele.remove());

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.forEach((ele) => {
        const liElement = document.createElement("LI");
        liElement.textContent = ele.title;
        ulElement.appendChild(liElement);
      });
    });
}

document.getElementById("btn3").addEventListener("click", fetchApi);
document.getElementById("btn2").addEventListener("click", fetchJson);
document.getElementById("btn1").addEventListener("click", fetchText);
