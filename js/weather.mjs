/**
 * Convert WMO weather code to description
 * @param {number} code WMO Weather Interpretation codes
 * @returns {string} Weather Description
 * @see https://open-meteo.com/en/docs#weathervariables
 */
function codeToWeather(code) {
  switch (code) {
    case 0:
      return 'Clear sky';
    case 1:
      return 'Mainly clear';
    case 2:
      return 'Partly cloudy';
    case 3:
      return 'Overcast';
    case 45:
    case 48:
      return 'Fog';
    case 51:
    case 53:
    case 55:
      return 'Drizzle';
    case 56:
    case 57:
      return 'Freezing Drizzle';
    case 61:
    case 63:
    case 65:
      return 'Rain';
    case 66:
    case 67:
      return 'Freezing Rain';
    case 71:
    case 73:
    case 75:
      return 'Snow fall';
    case 77:
      return 'Snow grains';
    case 80:
    case 81:
    case 82:
      return 'Rain showers';
    case 85:
    case 86:
      return 'Snow showers';
    default:
      return 'Unknown';
  }
}

const $weather = document.getElementById('weather').firstElementChild;

navigator.geolocation.getCurrentPosition(
  (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m&current_weather=true`
    )
      .then((res) => res.json())
      .then((json) => {
        const temp = json.current_weather.temperature;
        const code = json.current_weather.weathercode;
        $weather.textContent = `${temp}'C / ${codeToWeather(code)}`;
      });
  },
  () => {
    alert("Can't find you. No weather for you.");
  }
);
