import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductButton from '../components/addProductButton';
import Header from '../components/Header';
import ProductsList from './ProductsList';
import ProductListHeader from '../components/productListHeader';

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <ProductListHeader />
      <ProductsList />
      <AddProductButton />
    </div>
  );
}

export default Main;
