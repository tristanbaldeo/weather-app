import './style.css';
import {createWeatherApp} from './dom.js';
import {initializeSearch} from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    createWeatherApp();
    initializeSearch();
});