// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import useNavButton from '../../../hooks/useNavButton';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { buttonText, buttonLink } = useNavButton();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        N S
      </Link>
      <Link to={buttonLink} className={styles.button}>
        {buttonText}
      </Link>
    </nav>
  );
};

export default Navbar;
