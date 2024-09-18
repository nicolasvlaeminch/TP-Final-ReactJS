import React, { createContext, useContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLogged, onLogin, onLogout, loading, error } = useAuth();

  return (
    <AuthContext.Provider
      value={{ isLogged, onLogin, onLogout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
