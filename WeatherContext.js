import React, { createContext, useContext, useState } from "react";
import { fetchWeatherByCity, fetchForecastByCity } from "./WeatherService";
import {toast} from "react-toastify";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    try {
        const data = await fetchWeatherByCity(city);
        setWeather((prev) => ({ ...prev, current: data }));
      } catch (error) {
        toast.error("Geçersiz bir şehir adı girdiniz!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error("Error fetching weather data:", error);
      }
    };
  
  const getForecast = async (city) => {
    try {
        const data = await fetchForecastByCity(city, 7);
        setWeather((prev) => ({ ...prev, forecast: data.forecast }));
      } catch (error) {
        toast.error("Hava durumu tahmini alınamadı!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error("Error fetching forecast data:", error);
      }
    };

  return (
    <WeatherContext.Provider value={{ weather, getWeather, getForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
