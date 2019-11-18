// Init weather obj

const weather = new Weather('Moscow', 'ru');

//Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
weather.getWeather()
  .then(results => console.log(results))
  .catch(err => console.log(err));
}