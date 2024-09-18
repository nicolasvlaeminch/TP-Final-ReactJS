import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import Login from "./Login";

const LoginContainer = () => {
  const { isLogged, onLogin } = useAuthContext();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { username, password } = formValues;
    await onLogin(username, password);

    if (isLogged) {
      navigate("/home");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <Login
      formValues={formValues}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
