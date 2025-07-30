async function getWeather() {
  const city = document.getElementById('cityInput').value;
const apiKey = '934fe3f47152472ab27144154252907'; // Replace with your WeatherAPI key

  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
  const data = await response.json();
  const result = document.getElementById('weatherResult');

  if (data && data.location) {
    const weatherIcon = data.current.condition.icon;
    result.innerHTML = `
      <h3>${data.location.name}, ${data.location.country}</h3>
      <img src="https:${weatherIcon}" alt="icon" />
      <p>🌡️ ${data.current.temp_c}°C</p>
      <p>☁️ ${data.current.condition.text}</p>
      <p>💨 Wind: ${data.current.wind_kph} km/h</p>
    `;
  } else {
    result.innerHTML = `<p>City not found. Try again.</p>`;
  }
}
