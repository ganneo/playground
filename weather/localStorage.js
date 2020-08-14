class Storage {
  constructor() {
    this.stateKey = "state";
    this.cityKey = "city";
    this.defaultCity = "Mountain View";
    this.defaultState = "California";
  }

  save(city, state) {
    localStorage.setItem(this.cityKey, city);
    localStorage.setItem(this.stateKey, state);
  }

  getCity() {
    let city = localStorage.getItem(this.cityKey);
    if (!city) {
      city = this.defaultCity;
    }

    return city;
  }

  getState() {
    let state = localStorage.getItem(this.stateKey);
    if (!state) {
      state = this.defaultState;
    }

    return state;
  }
}
