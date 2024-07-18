import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <div className="bg-green-500 text-white p-4 flex justify-between items-center">
      <div className="logo flex items-center">
        <a href="#" onClick={ () => navigate('/main') }>
          <img src="https://raw.githubusercontent.com/w-felipe360/products-api/main/front-end/src/assets/salvusBlack.png" alt="Logo da Empresa" className="h-8 mr-2" />
        </a>
      </div>
      <div className="profile relative">
        <button onClick={ () => setIsDropdownOpen(!isDropdownOpen) } className="flex items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            <a href="#" onClick={ handleLogout } className="block px-4 py-2 text-black hover:bg-red-500 hover:text-white">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
