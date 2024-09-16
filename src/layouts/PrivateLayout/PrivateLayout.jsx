import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from "./PrivateLayout.module.css";
import Navbar from '../../components/shared/Navbar/Navbar';

const PrivateLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Eliminar las clases anteriores
    document.body.classList.remove('home', 'login', 'employees');
    
    // Aplicar la clase correcta para rutas privadas
    document.body.classList.add('login'); // Aplica el fondo compartido para todas las rutas privadas
  }, [location.pathname]);

  return (
    <div className={styles.privateLayoutContent}>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet /> {/* Renderiza las rutas hijas aquí */}
      </main>
    </div>
  );
};

export default PrivateLayout;
