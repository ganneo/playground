class WeatherData {
  setCity(city) {
    this.city = city;
    return this;
  }

  setCountry(country) {
    this.country = country;
    return this;
  }

  setTemperature(temperature) {
    this.temperature = temperature;
    return this;
  }

  setHumidity(humidity) {
    this.humidity = humidity;
    return this;
  }

  setIconLink(iconLink) {
    this.iconLink = iconLink;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setCoordLon(coordLon) {
    this.coordLon = coordLon;
    return this;
  }

  setCoordLat(coordLat) {
    this.coordLat = coordLat;
    return this;
  }

  setWindSpeed(windSpeed) {
    this.windSpeed = windSpeed;
    return this;
  }

  getCity() {
    return this.city;
  }

  getCountry() {
    return this.country;
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  getDescription() {
    return this.description;
  }

  getCoordLon() {
    return this.coordLon;
  }

  getCoordLat() {
    return this.coordLat;
  }

  getWindSpeed() {
    return this.windSpeed;
  }

  getIconLink() {
    return this.iconLink;
  }
}
