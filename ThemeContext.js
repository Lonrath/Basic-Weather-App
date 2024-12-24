import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
 //   console.log("Previous Dark Mode:", darkMode); // Mevcut değer
    setDarkMode((prev) => {
  //    console.log("Updated Dark Mode:", !prev); // Güncellenmiş değer
      return !prev;
    });
  };
  //okuyan arkadaşlara hatırlatma, burada fonksiyonun argümanı olan prev, javascriptte var olan bir keyworddür. önceki hal anlamını taşıyan previous gibi.

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
