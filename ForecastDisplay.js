const ForecastDisplay = ({ forecast }) => {
    if (!forecast) return null;
  
    return (
      <div>
        <h3>Haftalık Tahmin</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {forecast.forecastday.map((day) => (
            <div key={day.date} style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
              <p>{day.date}</p>
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
              <p>{day.day.avgtemp_c}°C</p>
              <p>{day.day.condition.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ForecastDisplay;
  