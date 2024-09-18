import React from "react";
import { Link } from "react-router-dom";
import useNavButton from "../../../hooks/useNavButton";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { buttonText, buttonLink, handleClick } = useNavButton();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        N S
      </Link>
      <Link
        to={buttonLink}
        className={styles.button}
        onClick={handleClick} // Usa handleClick para manejar el clic
      >
        {buttonText}
      </Link>
    </nav>
  );
};

export default Navbar;
