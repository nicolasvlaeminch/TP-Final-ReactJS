import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./Home.module.css";

const Home = () => {
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/landing");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Panel de usuario</h1>
        <div className={styles.imageContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2830/2830573.png"
            alt="Animated Avatar"
            className={styles.image}
          />
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Home;
