const apiKey = "5075c715d1cbf033e72f0647294dd972";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pretoria";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind;
}

checkWeather();
