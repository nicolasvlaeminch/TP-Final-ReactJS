import React from "react";
import styles from "./LoginButton.module.css";

const LoginButton = ({ children, onClick }) => {
  return (
    <button type="submit" id={styles.buttonLogin} onClick={onClick}>
      {children}
    </button>
  );
};

export default LoginButton;
