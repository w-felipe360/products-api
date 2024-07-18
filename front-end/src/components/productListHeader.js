import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

function ProductListHeader({ exploreText }) {
  return (
    <div
      className="bg-blue-500 text-white p-6 shadow-lg mb-4 flex flex-col items-center"
    >
      <FaUserAlt className="text-4xl" />
      <h1 className="text-3xl font-bold text-center mt-2">Shared inventory</h1>
      <p className="text-xl text-center mt-2">
        {exploreText}
      </p>
    </div>
  );
}

export default ProductListHeader;
