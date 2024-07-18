function ProductCard({ product, canEdit, isOpen }) {
  return (
    <div className="m-2 w-96 max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between">
      <div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 truncate">{product.name}</div>
          <p className="text-gray-700 text-base truncate">
            {product.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Preço: $
            {product.price}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Owner:
            {' '}
            {product.user?.name}
          </span>
        </div>
      </div>
      {canEdit && (
        <div className="px-6 py-4">
          <div className="flex justify-end space-x-2">
            <button
              onClick={ () => isOpen() }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Editar
            </button>
            <button
              onClick
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Excluir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
