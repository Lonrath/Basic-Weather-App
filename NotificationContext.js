import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const showNotification = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000); // 3 saniye sonra mesajı temizle
  };

  return (
    <NotificationContext.Provider value={{ message, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
