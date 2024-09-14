import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <header>
        <h1>Área Privada</h1>
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
