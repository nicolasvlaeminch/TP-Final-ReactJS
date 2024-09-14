import { useState } from 'react';

// Mock de usuarios
const mockUsers = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  // Puedes agregar más usuarios aquí si es necesario
];

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    const user = mockUsers.find(u => u.username === username && u.password === password);
    if (user) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};
