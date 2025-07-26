import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-3xl p-4 shadow bg-white dark:bg-gray-700 dark:text-white hover:shadow-lg transition">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 mx-auto object-contain"
        />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-sm mt-1 text-gray-600 dark:text-gray-300 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold">${product.price}</span>
          <span className="text-yellow-500">{product.rating?.rate}</span>
        </div>
      </Link>

      <button
        onClick={() => onAddToCart(product)}
        className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition"
      >
         Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
