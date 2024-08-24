export function createWeatherApp() {
    const content = document.createElement('div');
    content.id = 'content';

    // Header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    const headerText = document.createElement('header');
    headerText.className = 'header-text';
    headerText.textContent = 'Weather';
    headerDiv.appendChild(headerText);

    // Search Container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    const locationSearch = document.createElement('input');
    locationSearch.type = 'text';
    locationSearch.placeholder = 'City, State, ZIP code...';
    locationSearch.className = 'location-search';
    searchContainer.appendChild(locationSearch);

    // Degrees Container
    const degreesContainer = document.createElement('div');
    degreesContainer.className = 'degrees-container';
    const farenheitBtn = document.createElement('p');
    farenheitBtn.className = 'farenheit-btn active';
    farenheitBtn.textContent = '°F/mph';
    const metricToggleContainer = document.createElement('div');
    metricToggleContainer.className = 'metric-toggle-container';
    const metricToggleLabel = document.createElement('label');
    metricToggleLabel.className = 'metric-toggle';
    const metricToggleInput = document.createElement('input');
    metricToggleInput.type = 'checkbox';
    metricToggleInput.id = 'metric-toggle';
    const circleDiv = document.createElement('div');
    circleDiv.className = 'circle';
    metricToggleLabel.appendChild(metricToggleInput);
    metricToggleLabel.appendChild(circleDiv);
    metricToggleContainer.appendChild(metricToggleLabel);
    const celsiusBtn = document.createElement('p');
    celsiusBtn.className = 'celsius-btn';
    celsiusBtn.textContent = '°C/kph';
    degreesContainer.appendChild(farenheitBtn);
    degreesContainer.appendChild(metricToggleContainer);
    degreesContainer.appendChild(celsiusBtn);

    // Weather Container
    const weatherContainer = document.createElement('div');
    weatherContainer.className = 'weather-container';

    const locationInfoContainer = document.createElement('div');
    locationInfoContainer.className = 'location-info-container';
    const locationHeader = document.createElement('p');
    locationHeader.className = 'location-header';
    locationInfoContainer.appendChild(locationHeader); // Add dynamic location later

    const locationCountry = document.createElement('p');
    locationCountry.className = 'location-country';
    locationInfoContainer.appendChild(locationCountry); // Add dynamic country later

    const lastUpdated = document.createElement('p');
    lastUpdated.className = 'last-updated';
    locationInfoContainer.appendChild(lastUpdated); // Add dynamic last updated time later

    weatherContainer.appendChild(locationInfoContainer);

    const conditionsContainer = document.createElement('div');
    conditionsContainer.className = 'conditions-container';

    const conditionsTextContainer = document.createElement('div');
    conditionsTextContainer.className = 'conditions-text-container';
    const tempText = document.createElement('p');
    tempText.className = 'temp-text';
    conditionsTextContainer.appendChild(tempText); // Add dynamic temperature later

    const conditionsText = document.createElement('p');
    conditionsText.className = 'conditions-text';
    conditionsTextContainer.appendChild(conditionsText); // Add dynamic condition later

    const maxMinTempContainer = document.createElement('div');
    maxMinTempContainer.className = 'max-min-temp-container';
    const maxTemp = document.createElement('p');
    maxTemp.className = 'max-min-temp';
    maxMinTempContainer.appendChild(maxTemp); // Add dynamic max temp later
    const minTemp = document.createElement('p');
    minTemp.className = 'max-min-temp';
    maxMinTempContainer.appendChild(minTemp); // Add dynamic min temp later

    conditionsTextContainer.appendChild(maxMinTempContainer);
    conditionsContainer.appendChild(conditionsTextContainer);

    const conditionsDetailsContainer = document.createElement('div');
    conditionsDetailsContainer.className = 'conditions-details-container';

    // Feels Like
    const feelsLikeLabel = document.createElement('p');
    feelsLikeLabel.textContent = 'Feels Like:';
    const feelsLikeValue = document.createElement('p');
    feelsLikeValue.className = 'right';
    conditionsDetailsContainer.appendChild(feelsLikeLabel);
    conditionsDetailsContainer.appendChild(feelsLikeValue); // Add dynamic feels like later

    // Humidity
    const humidityLabel = document.createElement('p');
    humidityLabel.textContent = 'Humidity:';
    const humidityValue = document.createElement('p');
    humidityValue.className = 'right';
    conditionsDetailsContainer.appendChild(humidityLabel);
    conditionsDetailsContainer.appendChild(humidityValue); // Add dynamic humidity later

    // Wind
    const windLabel = document.createElement('p');
    windLabel.textContent = 'Wind:';
    const windValue = document.createElement('p');
    windValue.className = 'right';
    conditionsDetailsContainer.appendChild(windLabel);
    conditionsDetailsContainer.appendChild(windValue); // Add dynamic wind later

    // Chance of Rain
    const chanceRainLabel = document.createElement('p');
    chanceRainLabel.textContent = 'Chance of Rain:';
    const chanceRainValue = document.createElement('p');
    chanceRainValue.className = 'right';
    conditionsDetailsContainer.appendChild(chanceRainLabel);
    conditionsDetailsContainer.appendChild(chanceRainValue); // Add dynamic chance of rain later

    conditionsContainer.appendChild(conditionsDetailsContainer);
    weatherContainer.appendChild(conditionsContainer);

    content.appendChild(headerDiv);
    content.appendChild(searchContainer);
    content.appendChild(degreesContainer);
    content.appendChild(weatherContainer);

    // Append the content to the body
    document.body.appendChild(content);
}
