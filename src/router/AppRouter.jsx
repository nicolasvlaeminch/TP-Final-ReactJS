import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Landing, LoginContainer, EmployeesContainer, Home } from "../pages";
import { PublicLayout, PrivateLayout } from "../layouts";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../context/AuthContext";

const AppRouter = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<LoginContainer />} />
        </Route>

        <Route path="/" element={<PrivateLayout />}>
          <Route
            path="home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="employees"
            element={
              <PrivateRoute>
                <EmployeesContainer />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default AppRouter;
