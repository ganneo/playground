class UI {
  constructor(currentDocument) {
    this.loc = currentDocument.getElementById("loc");
    this.wDescripition = currentDocument.getElementById("w-description");
    this.wImg = currentDocument.getElementById("w-img");
    this.wTemp = currentDocument.getElementById("w-temp");
    this.wHumidity = currentDocument.getElementById("w-humidity");
    this.wFeelsLike = currentDocument.getElementById("w-feels-like");
    this.wWindSpeed = currentDocument.getElementById("w-wind-speed");
    this.city = currentDocument.getElementById("city");
    this.state = currentDocument.getElementById("state");
    this.changeLocationModal = $("#change-loc");
  }

  /**
   *
   * @param {WeatherData} weatherData
   */
  paint(weatherData) {
    this.loc.textContent = `${weatherData.getCountry()}, ${weatherData.getCity()}`;
    this.wDescripition.textContent = weatherData.getDescription();
    this.wImg.src = weatherData.getIconLink();
    this.wTemp.textContent = `The temperature is ${weatherData.getTemperature()} °F`;
    this.wHumidity.textContent = `The humidity is ${weatherData.getHumidity()}%`;
    this.wFeelsLike.textContent = `The longitude is ${weatherData.getCoordLon()} and the latitude is ${weatherData.getCoordLat()}`;
    this.wWindSpeed.textContent = `The wind speed is ${weatherData.getWindSpeed()} mph`;
  }

  clearModal() {
    this.city.value = "";
    this.state.value = "";
    this.changeLocationModal.modal("hide");
  }
}
