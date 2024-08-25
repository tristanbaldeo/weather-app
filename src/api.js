// Search functionality
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

// Capture input from the search bar
// API call to fetch weather data based on location input
// Handle responses, error and update UI


// Temperature toggle

// Listen for button toggle
// Toggle active class
// Convert temperature data between F to C
// Update displayed temperature in the UI through calculation (not new API call)


// Possibly cache data to prevent constant API calls
// Loading indicator when call happens


// Error handling