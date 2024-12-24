import axios from "axios";

const API_KEY = "{YOUR API KEY}";
const BASE_URL = "https://api.weatherapi.com/v1";

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchForecastByCity = async (city, days = 7) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
};
