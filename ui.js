class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.pressure = document.getElementById('w-pressure');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.tempMin = document.getElementById('w-temp-min');
    this.tempMax = document.getElementById('w-temp-max');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');
    
    }


    paint(weather) {
      

      this.location.textContent = `${weather.name}, ${weather.sys.country}`;
      this.desc.textContent = weather.weather[0].main;
      this.pressure.textContent = `${weather.main.pressure} hPa`;
      this.string.textContent = `${weather.main.temp} Celsius`;
      this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
      this.tempMin.textContent = `Minimum temperature at the moment: ${weather.main.temp_min} Celsius`;
      this.tempMax.textContent = `Maximum temperature at the moment: ${weather.main.temp_max} Celsius`;
      this.wind.textContent = `Wind: ${weather.wind.speed} meter/sec`;
      
    }
}
