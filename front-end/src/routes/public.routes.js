import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default PublicRoutes;
