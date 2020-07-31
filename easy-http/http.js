function addPosts(e) {
  e.preventDefault();

  const postValue = document.getElementById("post").value;
  if (!postValue) {
    const divElement = document.createElement("DIV");
    divElement.textContent = "Please Enter Your Post";
    divElement.style.padding = "2rem 3rem";
    divElement.style.border = "1px red solid";
    divElement.style.color = "red";
    divElement.style.maxWidth = "50rem";
    divElement.style.marginBottom = "2rem";
    divElement.style.borderRadius = "5px";
    const bodyElement = document.querySelector("body");
    const formElement = document.querySelector("form");
    bodyElement.insertBefore(divElement, formElement);

    setTimeout(() => {
      divElement.remove();
    }, 3000);
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http.json`, true);
  xhr.onload = () => {
    const obj = {
      text: `${postValue}`,
    };

    xhr.responseText = obj;
    console.log(xhr.responseText);
  };
  xhr.onerror = () => {
    const divElement = document.createElement("DIV");
    divElement.textContent = "Something Went Wrong";
    divElement.style.padding = "2rem 3rem";
    divElement.style.border = "1px red solid";
    divElement.style.color = "red";
    divElement.style.maxWidth = "50rem";
    divElement.style.marginBottom = "2rem";
    divElement.style.borderRadius = "5px";
    const bodyElement = document.querySelector("body");
    const formElement = document.querySelector("form");
    bodyElement.insertBefore(divElement, formElement);

    setTimeout(() => {
      divElement.remove();
    }, 3000);
  };

  xhr.send();

  document.getElementById("post").value = "";
}

function getPosts(e) {
  const ulElement = document.getElementById("posts");
  ulElement.childNodes.forEach((ele) => {
    ele.remove();
  });

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http.json`, true);
  xhr.onload = () => {
    postArray = JSON.parse(xhr.responseText);
    postArray.forEach((ele) => {
      const postTitle = ele.text;
      const liElement = document.createElement("LI");
      liElement.textContent = postTitle;
      ulElement.appendChild(liElement);
    });
  };
  xhr.onerror = () => {
    console.log("somthing went wrong");
  };
  xhr.send();
  e.preventDefault();
}

const submitBtn = document.getElementById("submit-btn");
const getPostsBtn = document.getElementById("get-post-btn");
getPostsBtn.addEventListener("click", getPosts);
submitBtn.addEventListener("click", addPosts);
