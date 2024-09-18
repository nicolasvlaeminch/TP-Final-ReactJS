import React from "react";
import { HomeText } from "../../components";
import styles from "./Landing";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HomeText />
    </div>
  );
};

export default Home;
