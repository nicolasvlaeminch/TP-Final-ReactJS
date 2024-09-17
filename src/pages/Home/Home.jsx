import React from "react";
import { HomeText } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HomeText />
    </div>
  );
};

export default Home;
