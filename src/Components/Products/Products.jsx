import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  console.log("products from props:", products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300 col-span-full">
          No products found.
        </p>
      )}
    </div>
  );
};

export default Products;
