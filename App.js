import React, { useState } from "react";
import { useWeather } from "./WeatherContext";
import { useNotification } from "./NotificationContext";
import { useTheme } from "./ThemeContext";
import WeatherDisplay from "./WeatherDisplay";
import ForecastDisplay from "./ForecastDisplay";
import "./App.css";
import {toast, ToastContainer} from "react-toastify";

const App = () => {
  const [city, setCity] = useState("");
  const { weather, getWeather, getForecast } = useWeather();
  const { message, showNotification } = useNotification();
  const { darkMode, toggleTheme } = useTheme();

  const handleSearch = () => {
    if (!city) {
      showNotification("Lütfen bir şehir adı girin!");
      return;
    }
    try{
    getWeather(city);
    getForecast(city);
    }
    catch (error) {
      toast.error("Geçersiz bir şehir adı girdiniz!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} style={{ textAlign: "center", padding: "20px" }}>{/*console.log("Current Theme Class:", darkMode ? "dark-mode" : "light-mode")*/}
      <header style={{ marginBottom: "20px" }}>
        <h1>Hava Durumu Uygulaması</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {darkMode ? "Gündüz Modu" : "Gece Modu"}
        </button>
      </header>

      {message && <div style={{ color: "red", marginBottom: "20px" }}>{message}</div>}

      <div>
        <input
          type="text"
          placeholder="Şehir adı giriniz"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Hava Durumunu Getir
        </button>
      </div>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <WeatherDisplay weather={weather.current} />
          <ForecastDisplay forecast={weather.forecast} />
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default App;
