import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  const onLogin = async (username, password) => {
    setError("");
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        let fakeToken = "12435";
        localStorage.setItem("token", fakeToken);
        setIsLogged(true);
      } else {
        setError("Usuario o contraseña incorrectos");
        console.log("error");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      setError("Error en el inicio de sesión");
    }
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    window.location.reload();
  };

  return { isLogged, onLogin, onLogout, error };
};

export default useAuth;
