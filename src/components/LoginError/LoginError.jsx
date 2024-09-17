import React from 'react';
import styles from './LoginError.module.css';

const LoginError = ({ message }) => {
    return message ? <p className={styles.error}>{message}</p> : null;
};

export default LoginError;
