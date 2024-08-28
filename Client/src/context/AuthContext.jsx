import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async(formData) => {
    // setCurrUser({id:1, name: "omkar kasture", profilePic:"https://images.unsplash.com/photo-1647685658173-94c4f42725fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"});
    const res = await axios.post('http://localhost:8800/api/auth/login', formData, {
      withCredentials: true,
    });

    setCurrUser(res.data)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
  }, [currUser]);

  return (
    <AuthContext.Provider value={{ currUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
