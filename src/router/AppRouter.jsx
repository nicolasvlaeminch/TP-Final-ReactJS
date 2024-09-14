import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Employees from '../pages/Employees';
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
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
    </Routes>
  </Router>
);

export default AppRouter;
