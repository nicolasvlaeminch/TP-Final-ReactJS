import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, LoginContainer, EmployeesContainer } from "../pages";
import { PublicLayout, PrivateLayout } from "../layouts";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginContainer />} />{" "}
      </Route>

      <Route path="/" element={<PrivateLayout />}>
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
  </Router>
);

export default AppRouter;
