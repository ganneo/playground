class EasyHttp {
  constructor(url) {
    this.url = url;
  }

  // get
  get(callBack) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.url, true);
    xhr.onload = () => {
      callBack(xhr.responseText);
    };
    xhr.send();
  }

  // post
  post(callBack, data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", this.url, true);
    xhr.onload = () => {
      const response = xhr.responseText;
      callBack(xhr.status, response);
    };
    xhr.send(data);
  }
}
