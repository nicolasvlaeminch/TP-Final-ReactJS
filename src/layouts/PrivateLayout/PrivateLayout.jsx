import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./PrivateLayout.module.css";
import Navbar from "../../components/shared/Navbar/Navbar";

const PrivateLayout = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("home", "login", "employees");

    if (location.pathname === "/home") {
      document.body.classList.add("home");
    } else if (location.pathname === "/employees") {
      document.body.classList.add("employees");
    }
  }, [location.pathname]);

  return (
    <div className={styles.privateLayoutContent}>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
