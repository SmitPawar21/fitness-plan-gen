import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [isDataEntered, setIsDataEntered] = useState(false);

  const login = (userData)=>{
    setUser(userData);
  };

  const saveUserId = (user_id)=>{
    setUserId(user_id);
  };

  const saveToken = (recieved_token) =>{
    setToken(recieved_token);
  };

  const dataEntry = (value) =>{
    setIsDataEntered(value);
  }

  const logout = () => {
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, saveUserId, userId, saveToken, token, isDataEntered, dataEntry }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
