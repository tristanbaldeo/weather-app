// Search functionality
// Object storing weather data
const weatherData = {
    city: '',
    state: '',
    country: '',
    temperature: {
        currentF: 0,
        currentC: 0,
        highF: 0,
        highC: 0,
        lowF: 0,
        lowC: 0,
        feelsLikeF: 0,
        feelsLikeC: 0
    },
    conditions: '',
    wind: {
        speedMph: 0,
        speedKph: 0,
        direction: ''
    },
    humidity: 0,
    chanceOfRain: 0,
    lastUpdated: ''
};

// API call to fetch weather data based on location input
async function fetchWeatherData(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=54db39cdb2854b31a44231017242508&q=${location}&days=6&aqi=no&alerts=no`)
        if (response.ok == false) {
            throw new Error("Something went wrong");
        }
        const data = await response.json();

        weatherData.city = data.location.name;
        weatherData.state = data.location.region;
        weatherData.country = data.location.country;
        weatherData.temperature.currentF = data.current.temp_f;
        weatherData.temperature.currentC = data.current.temp_c;
        weatherData.temperature.highF = data.forecast.forecastday[0].day.maxtemp_f;
        weatherData.temperature.highC = data.forecast.forecastday[0].day.maxtemp_c;
        weatherData.temperature.lowF = data.forecast.forecastday[0].day.mintemp_f;
        weatherData.temperature.lowC = data.forecast.forecastday[0].day.mintemp_c;
        weatherData.temperature.feelsLikeF = data.current.feelslike_f;
        weatherData.temperature.feelsLikeC = data.current.feelslike_c;
        weatherData.conditions = data.current.condition.text;
        weatherData.wind.speedMph = data.current.wind_mph;
        weatherData.wind.speedKph = data.current.wind_kph;
        weatherData.wind.direction = data.current.wind_dir;
        weatherData.humidity = data.current.humidity;
        weatherData.chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
        weatherData.lastUpdated = data.current.last_updated;

        return weatherData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Capture input from the search bar
export function initializeSearch() {
    document.querySelector('.location-search').addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            const location = e.target.value;
            await updateWeather(location);
            console.log(location)
            console.log(weatherData)
        }
    });
};

// Handle responses, error and update UI
export async function updateWeather(location) {
    const updatedData = await fetchWeatherData(location);
    if (updatedData) {
        document.querySelector('.location-header').textContent = `${weatherData.city}, ${weatherData.state}`;
        document.querySelector('.location-country').textContent = `${weatherData.country}`;
        document.querySelector('.last-updated').textContent = `Last updated: ${weatherData.lastUpdated}`;
        document.querySelector('.temp-text').textContent = `${weatherData.temperature.currentF}°F`;
        document.querySelector('.conditions-text').textContent = `${weatherData.conditions}`;

        const maxMinTempElements = document.querySelectorAll('.max-min-temp');
        const maxTempElement = maxMinTempElements[0];
        const minTempElement = maxMinTempElements[1];
        maxTempElement.textContent = `High: ${weatherData.temperature.highF}°F`;
        minTempElement.textContent = `Low: ${weatherData.temperature.lowF}°F`;

        const rightElements = document.querySelectorAll('.right');
        const feelsLikeElement = rightElements[0];
        const humidityElement = rightElements[1];
        const windElement = rightElements[2];
        const chanceOfRainElement = rightElements[3];
        feelsLikeElement.textContent = `${weatherData.temperature.feelsLikeF}°F`;
        humidityElement.textContent = `${weatherData.humidity}%`;
        windElement.textContent = `${weatherData.wind.speedMph}MPH ${weatherData.wind.direction}`;
        chanceOfRainElement.textContent = `${weatherData.chanceOfRain}%`;
    }
}

// Temperature toggle

// Listen for button toggle
// Toggle active class
// Convert temperature data between F to C
// Update displayed temperature in the UI through calculation (not new API call)


// Possibly cache data to prevent constant API calls
// Loading indicator when call happens


// Error handling