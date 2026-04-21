const apiKey = "5075c715d1cbf033e72f0647294dd972";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pretoria";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
}

checkWeather();
