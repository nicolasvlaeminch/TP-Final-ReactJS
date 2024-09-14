import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from "../styles/PublicLayout.module.css";
import Navbar from '../components/shared/Navbar/Navbar';

const PublicLayout = () => {
  return (
    <div className={styles.publicLayoutContent}>
      <header>
        <Navbar/>
        {/* Puedes agregar más elementos de diseño aquí */}
      </header>
      <main>
        <Outlet /> {/* Renderiza las rutas hijas aquí */}
      </main>
      {/* <footer>
        <p>Pie de página</p>
      </footer> */}
    </div>
  );
};

export default PublicLayout;
