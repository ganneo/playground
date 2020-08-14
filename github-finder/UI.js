class UI {
  // create the profile
  static createUser(userObj) {
    const divElement = document.createElement("DIV");
    divElement.className = "card users mt-3";
    divElement.innerHTML = `
    <div class="card-header">
      <h1>${userObj.login}</h1>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">
          <img
            src="${userObj.avatar_url}"
            alt=""
            style="width: 100%;"
          />
          <a
            href="https://github.com/${userObj.login}"
            target="_blank"
            class="btn btn-primary btn-block mt-3"
            >View Profile</a
          >
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repo: ${userObj.public_repos}</span>
          <span class="mt-3 badge badge-secondary">Public Gists: ${userObj.public_gists}</span>
          <span class="mt-3 badge badge-success">Followers: ${userObj.followers}</span>
          <span class="mt-3 badge badge-info">Following: ${userObj.following}</span>
          <ul class="list-group mt-3">
            <li class=" list-group-item">Company: ${userObj.company}</li>
            <li class=" list-group-item">Website/blog: ${userObj.blog}</li>
            <li class=" list-group-item">Location: ${userObj.location}</li>
            <li class="list-group-item">
              Member Since: ${userObj.updated_at}
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;
    const container = document.querySelector(".container");
    const repos = document.querySelector(".repos");
    container.insertBefore(divElement, repos);
  }

  //   create alert
  static createAlert() {
    const alert = document.querySelector(".alert-danger");
    alert.style.display = "block";
  }

  // remove alert
  static removeAlert() {
    const alert = document.querySelector(".alert-danger");
    alert.style.display = "none";
  }

  // clear users
  static clearUsers() {
    const users = document.querySelector(".users");
    if (!users) {
      return;
    }
    users.remove();
  }

  // show repos
  static showRepos(username, name, stars, watchers, forks) {
    const liElement = document.createElement("LI");
    liElement.className =
      "list-group-item d-flex justify-content-between align-items-center repo";
    liElement.innerHTML = `
    <a href="https://github.com/${username}/${name}" target="_blank">${name}</a>
    <span id="badge">
      <span class="badge badge-primary">Stars: ${stars}</span>
      <span class="badge badge-success">Watchers: ${watchers}</span>
      <span class="badge badge-warning">Forks: ${forks}</span>
    </span>
    `;
    const reposCard = document.querySelector(".repos");
    reposCard.style.display = "block";
    const ulElement = document.querySelector(".repo-ul");
    ulElement.appendChild(liElement);
  }

  // remove repos
  static removeRepos() {
    const repoLi = document.getElementsByClassName("repo");
    Array.from(repoLi).forEach((ele) => ele.remove());
    const reposCard = document.querySelector(".repos");
    reposCard.style.display = "none";
  }
}
