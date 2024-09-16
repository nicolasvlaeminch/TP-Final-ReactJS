import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from "./PublicLayout.module.css";
import Navbar from '../../components/shared/Navbar/Navbar';

const PublicLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Eliminar las clases anteriores
    document.body.classList.remove('home', 'login', 'employees');
    
    // Aplicar la clase correcta según la ruta actual
    if (location.pathname === '/') {
      document.body.classList.add('home');
    } else if (location.pathname === '/login') {
      document.body.classList.add('login');
    }
  }, [location.pathname]);

  return (
    <div className={styles.publicLayoutContent}>
      <header>
        <Navbar className={styles.navbar}/>
      </header>
      <main>
        <Outlet /> {/* Renderiza las rutas hijas aquí */}
      </main>
    </div>
  );
};

export default PublicLayout;
