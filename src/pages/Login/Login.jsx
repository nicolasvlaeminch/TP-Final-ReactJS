import React from "react";
import { LoginInput, LoginButton, LoginError } from "../../components";
import styles from "./Login.module.css";

const Login = ({ formValues, error, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.loginForm}>
      <h1>¡Bienvenido!</h1>
      <LoginInput
        name="username"
        placeholder="Usuario"
        value={formValues.username}
        onChange={onChange}
        type="text"
      />
      <LoginInput
        name="password"
        placeholder="Contraseña"
        value={formValues.password}
        onChange={onChange}
        type="password"
      />
      <LoginButton>Iniciar Sesión</LoginButton>
      <LoginError message={error} />
    </form>
  );
};

export default Login;
