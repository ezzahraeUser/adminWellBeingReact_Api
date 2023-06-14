import React, { createContext, useState } from "react";

export const TokenContext = createContext(null);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

   const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };


  return (
    <TokenContext.Provider value={{ token, updateToken,logout }}>
      {children}
    </TokenContext.Provider>
  );
};
