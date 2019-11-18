function getJSN(yourUrl){
  let http = new XMLHttpRequest(); // a new request
  http.open("GET",yourUrl,false);
  http.send(null);
  return http.responseText;          
}

let client = JSON.parse(getJSN('/WeatherJS/key.json'));
let apiKeyAPI = client.key;



class Weather {
  constructor(city, country) {
    this.apiKey = apiKeyAPI;
    this.city = city;
    this.country = country;
  }
  //Fetch weather from API
  async getWeather() {
   const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

   const responseData = await response.json();

   return responseData.main;
  }

  //Change weather location

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
 }




