"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(loadUserFromLocalStorage());
  const [isLoading, setIsLoading] = useState(true);

  function loadUserFromLocalStorage() {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
      setIsLoading(false);
    }
  }

  const saveUserToLocalStorage = (userData) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const login = (userData) => {
    // You may want to perform additional actions here
    setIsLoading(true);
    setUser(userData);
    saveUserToLocalStorage(userData);
    setIsLoading(false);
  };

  const logout = () => {
    // You may want to perform additional actions here
    setIsLoading(true);
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
    setIsLoading(false);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
