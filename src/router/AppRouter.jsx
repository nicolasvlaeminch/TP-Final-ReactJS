import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Employees from '../pages/Employees/Employees';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout/PrivateLayout';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
  <Router>
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Rutas privadas */}
      <Route path="/" element={<PrivateLayout />}>
        <Route path="employees" element={
          <PrivateRoute>
            <Employees />
          </PrivateRoute>
        } />
      </Route>

      {/* Ruta para manejar rutas no encontradas */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default AppRouter;
