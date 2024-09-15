import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from "./PrivateLayout.module.css";
import Navbar from '../../components/shared/Navbar/Navbar';

const PrivateLayout = () => {
  return (
    <div className={styles.privateLayoutContent}>
      <header>
        <Navbar/>
        {/* Puedes agregar más elementos de diseño aquí */}
      </header>
      <main>
        <Outlet /> {/* Renderiza las rutas hijas aquí */}
      </main>
      {/* <footer>
        <p>Pie de página privado</p>
      </footer> */}
    </div>
  );
};

export default PrivateLayout;
