class Github {
  constructor() {
    this.id = "1ae73b8e3273e520912e";
    this.secret = "46a442f45975bbde083a7bd5fbdcfa0f7dc42dd9";
  }

  // find user
  async getUser(username) {
    const response = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.id}&client_secret=${this.secret}`
    );
    const userObj = await response.json();
    return userObj;
  }

  // find repo
  async getRepo(username) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.id}&client_secret=${this.secret}`
    );

    if (response.status === 404) {
      return null;
    }
    const repoArr = await response.json();
    return repoArr;
  }
}
