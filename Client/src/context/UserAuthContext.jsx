import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextContextProvider = ({ children }) => {
  const [currUser, setCurruser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // to be done
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
  }, [currUser]);

  return (
    <DarkModeContext.Provider value={{  }}>
      {children}
    </DarkModeContext.Provider>
  );
};
