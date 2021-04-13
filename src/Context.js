//Context Provider
import React, { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [domain, setDomain] = useState();
  const [sessionhistory, setHistory] = useState([]);
  return (
    <UserContext.Provider
      value={{
          domain,
          sessionhistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};