const api = {
  key: 'e3b80e200ae629553981659aa7589bc9',
  url: 'https://api.openweathermap.org/data/2.5/weather/'
}

const city = document.getElementById('card__city');
const date = document.getElementById('card__date');
const forecastIcon = document.getElementById('temp__icon');
const temp = document.getElementById('card__temp');
const weatherCondition = document.getElementById('card__description');
const range = document.getElementById('Range');
const form = document.getElementById('form');
const searchbox = document.getElementById('searchbox');
form.addEventListener('submit', onSubmit, true);

function onSubmit(event) {
  event.preventDefault();
  search(searchbox.value);
}

function activateSnow(temp) {
  const snow = document.getElementById('snow-elements');
  if (temp < 10) {
    snow.style.display = 'block';
  } else {
    snow.style.display = 'none';
  }
}

function updateIconAndSnow(data) {
  const temp = toCelsius(data.main.temp);
  let icon = '🌵';
  if (temp > 20) {
    icon = '🔥';
  } else if (temp < 19 && temp > 15) {
    icon = '🌞';
  } else if (temp < 14 && temp > 11) {
    icon = '⛅';
  } else if (temp < 10) {
    icon = '☃';
  }
  forecastIcon.innerHTML = icon;
  activateSnow(temp);
}

async function search(query) {
  try {
    const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
    console.log(response);
    const data = await response.json();
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    date.innerHTML = (new Date()).toLocaleDateString();
    temp.innerHTML = `${toCelsius(data.main.temp)}ºC`;
    weatherCondition.innerHTML = data.weather[0].description;
    range.innerHTML = `${toCelsius(data.main.temp_min)} ºC / ${toCelsius(data.main.temp_max)} ºC`;
    updateIconAndSnow(data);
  } catch (err) {
    console.log(err);
    alert('se presenta un error');
  }
}

function toCelsius(kelvin) {
  return Math.round(kelvin - 274);
}

search("Santiago");