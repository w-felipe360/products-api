import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/products', {
          headers: {
            Authorization: token,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error.response?.data?.error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async (name, description, price) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      'http://localhost:3000/products',
      { name, description, price },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    setProducts([...products, response.data]);
  };

  const getProductsByUser = async () => {
    const token = localStorage.getItem('token'); // Correção: Definir token aqui
    const response = await axios.get('http://localhost:3000/products/user', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  };

  return (
    <ProductsContext.Provider value={ { products, addProduct, getProductsByUser } }>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
