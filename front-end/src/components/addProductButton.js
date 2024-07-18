import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Modal from './Modal';
import ProductForm from './ProductForm';

function AddProductButton() {
  const [isOpen, setisOpen] = useState(false);

  const openForm = () => setisOpen(true);
  const onClose = () => setisOpen(false);

  return (
    <>
      <div
        style={ {
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'green',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        } }
        onClick={ openForm }
      >
        <FaPlus />
      </div>
      <Modal
        isOpen={ isOpen }
        onClose={ onClose }
        children={ <ProductForm onClose={ onClose } /> }
      />
    </>
  );
}

export default AddProductButton;
