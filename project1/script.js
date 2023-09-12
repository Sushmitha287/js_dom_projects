const weatherDataInfo = document.querySelector('.weather-data');
const apiKey = 'YOUR_API_KEY';
function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Units set to metric for Celsius
  fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch data from the API');
      }
    })
    .then((data) => {
      const cityName = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const weatherHtml = `
        <h2>Weather in ${cityName}</h2>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Description:</strong> ${description}</p>
      `;
      weatherDataInfo.innerHTML = weatherHtml;
    })
    .catch((error) => {
      weatherDataInfo.innerHTML = '<p>Error: Failed to get weather information</p>';
      console.error(error);
    });
}
function handleSubmit(event) {
  event.preventDefault();
  const cityInput = document.querySelector('#city-input').value;
  if (cityInput) {
    fetchWeather(cityInput);
  } else {
    alert('Please enter a city name');
  }
}
const weatherFormdata = document.querySelector('#weather-form');
weatherFormdata.addEventListener('submit', handleSubmit);
