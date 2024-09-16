import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

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
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={formValues.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formValues.password}
        onChange={handleChange}
        required
      />
      <button type="submit" id={styles.loginButton}>Iniciar Sesión</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
