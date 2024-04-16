// NOT NECESSARY ANYMORE
import React, { createContext, useState } from 'react';

// Authentification context creation
export const AuthContext = createContext();

// Authentification context provider component
export const AuthProvider = ({ children }) => {
  // State for connected user info stocking 
  const [user, setUser] = useState(null);

  // Connexion function
  const login = (userData) => {
    setUser(userData);
  };

  // Disconnexion function
  const logout = () => {
    setUser(null);
  };

  return (
    // provide context to children components
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
