import './style.css';
import {createWeatherApp} from './dom.js';
import {initializeSearch, updateWeather} from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    createWeatherApp();
    updateWeather('Miami');
    initializeSearch();
});