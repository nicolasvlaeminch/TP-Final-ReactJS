import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const LoginContainer = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formValues;
    const success = await login(username, password);
    if (success) {
      setError("");
      navigate("/employees");
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
