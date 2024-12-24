import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WeatherProvider } from "./WeatherContext";
import { NotificationProvider } from "./NotificationContext";
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NotificationProvider>
    <WeatherProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </WeatherProvider>
  </NotificationProvider>
);
