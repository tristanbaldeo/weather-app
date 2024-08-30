# Weather App
A dynamic weather application that fetches and displays current weather data based on user input. Users can search for a location to view the current weather, including temperature, conditions, wind speed, humidity, and more. The app also supports toggling between Fahrenheit and Celsius.

Live Link: https://tristanbaldeo.github.io/weather-app/

# Table of Contents
- Features
- Installation
- Usage
- Technologies

# Features
- Search Functionality: Enter a city, state, or country to view the current weather.
- Dynamic UI Updates: Weather information is dynamically fetched and displayed based on user input.
- Temperature Unit Toggle: Switch between Fahrenheit and Celsius.
- Responsive Design: Works on both desktop and mobile devices.
- Error Handling: Displays appropriate messages if there's an issue with fetching data.

# Installation

Ensure you have the following installed:
- Node.js
- npm

## Clone the Repository
```bash
git clone https://github.com/tristanbaldeo/weather-app.git
cd weather-app
```

## Install Dependencies
```bash
npm install
```

## API Key
This app uses the WeatherAPI to fetch weather data. Sign up for an API key on the WeatherAPI website.

## Build the Project
```bash
npm run build
```

## Start the Application
```bash
npm start
```

This will start the development server and open the app in your default web browser.

# Usage
- Search for a Location: Use the search bar to enter the name of a city, state, or country, and press Enter. The weather data for the entered location will be displayed.

- Toggle Temperature Unit: Use the provided toggle switch to change between Fahrenheit and Celsius.

- View Weather Details: See detailed weather information such as current temperature, high/low temperatures, wind speed, humidity, and conditions.

# Technologies
- HTML5
- CSS
- JavaScript (ES6+)
- Webpack: Module bundler to compile JavaScript and assets.
- WeatherAPI: Used to fetch weather data.