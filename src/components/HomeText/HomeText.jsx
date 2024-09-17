import React from 'react';
import styles from './HomeText.module.css';

const HomeText = () => {
    return (
        <div className={styles.homeText}>
        <h1 className={styles.titleBootcamp}>NS BOOTCAMP</h1>
        <h1 className={styles.titleEmployee}>GESTION DE EMPLEADOS</h1>
        </div>
    );
};

export default HomeText;
