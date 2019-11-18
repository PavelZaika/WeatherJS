// Init weather obj

const weather = new Weather('Moscow', 'ru');

//Init UI obj

const ui = new UI();

//Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
weather.getWeather()
  .then(results => ui.paint(results))
  .catch(err => console.log(err));
}