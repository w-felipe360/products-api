import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  const login = async (email, password) => {
    const response = await axios.post('http://localhost:3000/users/login', {
      email,
      password,
    });
    const { token } = response.data;
    localStorage.setItem('token', token);
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  };
  const register = async (name, email, password) => {
    const { data } = await axios.post('http://localhost:3000/users', {
      name,
      email,
      password,
    });
    return data;
  };
  return (

    <AuthContext.Provider value={ { auth, register, setAuth, login, logout } }>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
