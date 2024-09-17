import React from 'react';
import styles from './LoginInput.module.css';

const LoginInput = ({ name, placeholder, value, onChange, type }) => {
    return (
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        required
        />
    );
};

export default LoginInput;
