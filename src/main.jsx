// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router/AppRouter'; // Asegúrate de que la ruta de importación sea correcta
import './index.css';
import { AuthProvider } from './context/AuthContext'; // Importa el AuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
);
