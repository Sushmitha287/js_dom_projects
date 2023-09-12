const countryInfo = document.querySelector('.country-info');

// Function to fetch country data from the API
function fetchCountry() {
  // API endpoint URL
  const apiUrl = 'https://restcountries.com/v3/all';

  // Fetch data from the API
  fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch data from the API');
      }
    })
    .then((data) => {
      const randomIndexNum = Math.floor(Math.random() * data.length);
      const country = data[randomIndexNum];

      // Extract relevant information
      const countryName = country.name.common;
      const countryCode = country.cca2;
      const population = country.population.toLocaleString();
      const capital = country.capital?.[0] || 'N/A';

      // Create HTML content with the country information
      const countryHtml = `
        <h2>${countryName}</h2>
        <p><strong>Country Code:</strong> ${countryCode}</p>
        <p><strong>Population:</strong> ${population}</p>
        <p><strong>Capital:</strong> ${capital}</p>
      `;
      countryInfo.innerHTML = countryHtml;
    })
    .catch((error) => {
      countryInfo.innerHTML = '<p>Error: Failed to get data</p>';
      console.error(error);
    });
}
window.addEventListener('load', fetchCountry);
