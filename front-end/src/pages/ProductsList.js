import React, { useContext, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import ProductCard from '../components/productCard';
import { ProductsContext } from '../contexts/productsContext';

function ProductsList() {
  const { products } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const pageCount = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > pageCount) {
      setCurrentPage(pageCount > 0 ? pageCount : 1);
    }
  }, [products, pageCount, currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-500">No items registered.</div>
      </div>
    );
  }

  return (
    <>
      {(!products || products.length === 0) ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl text-gray-500">No items registered.</div>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center">
            {currentItems.map((product) => (
              <ProductCard key={ product.id } product={ product } />
            ))}
          </div>
          <ReactPaginate
            previousLabel={ <FaArrowLeft /> }
            nextLabel={ <FaArrowRight /> }
            breakLabel="..."
            pageCount={ pageCount }
            marginPagesDisplayed={ 2 }
            pageRangeDisplayed={ 5 }
            onPageChange={ handlePageClick }
            containerClassName="flex justify-center mt-8"
            pageClassName="mx-1 rounded-lg"
            pageLinkClassName="block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg"
            previousClassName="mx-1 rounded-lg"
            previousLinkClassName="block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg"
            nextClassName="mx-1 rounded-lg"
            nextLinkClassName="block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg"
            breakClassName="mx-1 rounded-lg"
            breakLinkClassName="block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-500 rounded-lg"
            activeClassName="bg-blue-500 text-white rounded-lg"
          />
        </div>
      )}
    </>
  );
}

export default ProductsList;
