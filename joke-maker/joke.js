function makeJokes(e) {
  const number = document.querySelector("input").value;
  if (!number) {
    return;
  }

  const ulElement = document.getElementById("jokes");
  const ulChildNodes = ulElement.childNodes;
  Array.from(ulChildNodes).forEach((ele) => ele.remove());

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = () => {
    if (xhr.status !== 200) {
      console.log(xhr.status);
      return;
    }

    const responseObj = JSON.parse(xhr.responseText);
    const jokeArray = responseObj.value;
    jokeArray.forEach((ele) => {
      const joke = ele.joke;
      const liEle = document.createElement("li");
      liEle.textContent = joke;
      ulElement.appendChild(liEle);
    });
    document.querySelector("input").value = "";
  };
  xhr.onerror = () => {
    console.log(xhr.responseText);
  };
  xhr.send();

  e.preventDefault();
}
document.querySelector("button").addEventListener("click", makeJokes);
