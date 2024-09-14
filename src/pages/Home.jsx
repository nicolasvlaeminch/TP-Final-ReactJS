import React from 'react';
import styles from '../styles/Home.module.css'; // Asegúrate de usar CSS Modules importando como un objeto

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeText}>
          <h1>Gestión de Empleados</h1>
          <p>Bienvenido a nuestra plataforma de gestión de empleados, diseñada para transformar la 
            manera en que administras tu equipo. Nuestro objetivo es ofrecerte herramientas avanzadas que optimicen la 
            eficiencia operativa, reduzcan el tiempo dedicado a tareas administrativas y mejoren la 
            comunicación dentro de tu empresa. Descubre cómo podemos ayudarte a construir un entorno 
            de trabajo más organizado y productivo.</p>
      </div>
    </div>
  );
};

export default Home;
