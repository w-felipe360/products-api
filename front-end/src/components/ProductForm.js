import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { ProductsContext } from '../contexts/productsContext';
import 'react-toastify/dist/ReactToastify.css';

function ProductForm({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const { addProduct } = useContext(ProductsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(name, description, price);
      toast.success('Product added successfully');
      onClose();
    } catch (error) {
      toast.error('Invalid fields');
    }
  };

  return (
    <form className="space-y-4" onSubmit={ handleSubmit }>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          value={ description }
          onChange={ (e) => setDescription(e.target.value) }
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          value={ price }
          onChange={ (e) => setPrice(e.target.value) }
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
      >
        Register
      </button>
    </form>
  );
}

export default ProductForm;
