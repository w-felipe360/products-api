import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/private.routes';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
