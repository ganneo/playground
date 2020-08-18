class EasyHttpAsync {
  constructor(url) {
    this.url = url;
  }

  // get
  async get() {
    const response = await fetch(this.url);
    const arrayObj = await response.json();
    return arrayObj;
  }

  //   post
  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const idObj = await response.json();
    return idObj;
  }
}
