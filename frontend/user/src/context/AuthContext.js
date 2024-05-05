"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuthToken(token);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {loading ? <div className="min-h-screen w-full flex justify-center items-center"><div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div></div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);