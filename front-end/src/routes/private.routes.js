import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/main" element={ <Main /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default PrivateRoutes;
