import React from 'react';
import HomeText from '../../components/HomeText/HomeText';
import styles from './Home.module.css'; // Asegúrate de usar CSS Modules importando como un objeto

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HomeText />
    </div>
  );
};

export default Home;
