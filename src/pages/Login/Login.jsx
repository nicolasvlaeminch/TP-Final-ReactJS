// components/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../../components/LoginInput/LoginInput';
import LoginButton from '../../components/LoginButton/LoginButton';
import LoginError from '../../components/LoginError/LoginError';
import styles from './Login.module.css'; // Asegúrate de usar CSS Modules importando como un objeto

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formValues;
    const success = await login(username, password);
    if (success) {
      setError('');
      navigate('/employees'); // Redirige a la vista de Employees
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h1>¡Bienvenido!</h1>
      <LoginInput
        name="username"
        placeholder="Usuario"
        value={formValues.username}
        onChange={handleChange}
        type="text"
      />
      <LoginInput
        name="password"
        placeholder="Contraseña"
        value={formValues.password}
        onChange={handleChange}
        type="password"
      />
      <LoginButton>Iniciar Sesión</LoginButton>
      <LoginError message={error} />
    </form>
  );
};

export default Login;
