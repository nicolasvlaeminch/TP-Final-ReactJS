import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        N S
      </Link>
      <Link to="/login" className={styles.button}>
        I N G R E S A R
      </Link>
    </nav>
  );
};

export default Navbar;
