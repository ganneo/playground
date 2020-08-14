const storage = new Storage();
const city = storage.getCity();
const state = storage.getState();
const weather = new Weather(city, state);
const ui = new UI(document);

function getAndShow() {
  weather.get().then((weatherData) => {
    ui.paint(weatherData);
  });
}

window.addEventListener("DOMContentLoaded", getAndShow);

document.getElementById("change-loc-btn").addEventListener("click", () => {
  const newCity = document.getElementById("city").value;
  const newState = document.getElementById("state").value;
  if (!newCity || !newState) {
    return;
  }
  storage.save(newCity, newState);
  weather.changeLocation(newCity, newState);
  getAndShow();
  ui.clearModal();
});
