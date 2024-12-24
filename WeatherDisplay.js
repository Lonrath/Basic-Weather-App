const WeatherDisplay = ({ weather }) => {
    if (!weather || !weather.location) return null; // Veriyi kontrol et
  
    return (
      <div>
        <h2>{weather.location.name}, {weather.location.country}</h2>
        <p>Sıcaklık: {weather.current.temp_c}°C</p>
        <p>Hava Durumu: {weather.current.condition.text}</p>
        <img src={weather.current.condition.icon} alt="Hava durumu ikonu" />
      </div>
    );
  };
  
  export default WeatherDisplay;
  