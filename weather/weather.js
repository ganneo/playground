class Weather {
  constructor(city, state) {
    this.appid = "c043629c2d6660188d6df4e01124e998";
    this.city = city;
    this.state = state;
  }

  changeLocation(newCity, newState) {
    this.city = newCity;
    this.state = newState;
  }

  async get() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.appid}&units=imperial`
    );
    const weatherObj = await response.json();
    const weatherData = new WeatherData();
    weatherData
      .setCity(weatherObj.name)
      .setCountry(weatherObj.sys.country)
      .setHumidity(weatherObj.main.humidity)
      .setTemperature(weatherObj.main.temp)
      .setDescription(weatherObj.weather[0].description)
      .setIconLink(
        `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`
      )
      .setCoordLon(weatherObj.coord.lon)
      .setCoordLat(weatherObj.coord.lat)
      .setWindSpeed(weatherObj.wind.speed);

    return weatherData;
  }
}
