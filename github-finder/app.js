const githubUsernameInput = document.getElementById("username");

githubUsernameInput.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    UI.clearUsers();
    UI.removeRepos();
    UI.removeAlert();
    return;
  }

  const github = new Github();
  github.getUser(e.target.value).then((userObj) => {
    UI.removeRepos();
    UI.clearUsers();

    if (userObj.message === "Not Found") {
      UI.createAlert();
      return;
    }

    UI.removeAlert();
    UI.createUser(userObj);
  });

  github.getRepo(e.target.value).then((repoArr) => {
    UI.removeRepos();
    if (!repoArr) {
      return;
    }
    repoArr
      .slice(0, 5)
      .forEach((ele) =>
        UI.showRepos(
          e.target.value,
          ele.name,
          ele.stargazers_count,
          ele.watchers,
          ele.forks
        )
      );
  });
});
