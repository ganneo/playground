function getPosts() {
  const easyHttp = new EasyHttp("https://jsonplaceholder.typicode.com/posts");
  easyHttp.get((t) => {
    const postArray = JSON.parse(t);
    postArray.forEach((ele) => {
      const text = ele.title;
      const liElement = document.createElement("LI");
      liElement.textContent = text;
      const ulElement = document.getElementById("posts");
      ulElement.appendChild(liElement);
    });
  });
}

function submitPost(e) {
  e.preventDefault();

  const inputValue = document.getElementById("post").value;
  if (!inputValue) {
    return;
  }
  const postData = JSON.stringify({
    title: `${inputValue}`,
    body: `${inputValue}`,
  });
  const easyHttp = new EasyHttp("https://jsonplaceholder.typicode.com/posts");

  easyHttp.post((status, res) => {
    if (status === 201) {
      const postId = JSON.parse(res).id;
      const postMadeDiv = document.querySelector(".made");
      postMadeDiv.style.display = "block";
      document.getElementById("post").value = "";

      setTimeout(() => {
        postMadeDiv.style.display = "none";
      }, 3000);

      const idDiv = document.querySelector(".postId");
      idDiv.textContent = `Post Id: ${postId}`;
      idDiv.style.display = "block";
      const line = document.querySelector(".line");
      const containerDiv = document.querySelector(".container");
      containerDiv.insertBefore(idDiv, line);
      return;
    }

    const errorDiv = document.querySelector(".wrong");
    errorDiv.style.display = "block";
    document.getElementById("post").value = "";

    setTimeout(() => {
      errorDiv.style.display = "none";
    }, 3000);
  }, postData);
}

const submitBtn = document.getElementById("submit-btn");
const getPostsBtn = document.getElementById("get-post-btn");
submitBtn.addEventListener("click", submitPost);
getPostsBtn.addEventListener("click", getPosts);
